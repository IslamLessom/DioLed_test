import express, { Request, Response } from "express";
import multer from "multer";
import fs from "fs";
import csvParser from "csv-parser";
import { Product } from "../models/product";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();
const upload = multer({ dest: path.join(__dirname, "../uploads/") });

const removeBOM = (filePath: any) => {
  const buffer = fs.readFileSync(filePath);
  if (buffer[0] === 0xef && buffer[1] === 0xbb && buffer[2] === 0xbf) {
    return buffer.slice(3); // Убираем BOM
  }
  return buffer;
};

function generateUniqueId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const standardFields = {
  product_name: "",
  drawing: "",
  material: "",
  mounting_type: "",
  type: "",
  connection: "",
  luminous_flux: "",
  power_consumption_per_meter: "",
  luminous_flux_per_meter: "",
  socket_type: "",
  lamp_type: "",
  color_rendering: "",
  beam_angle: "",
  ip_rating: "",
  output_voltage: "",
  light_source: "",
  power: "",
  color: "",
  color_temperature: "",
  dimming: "",
  base_price: null,
  announcement_image_url: "",
  additional_images: [],
  barcode: "",
};

function standardizeData(dataArray: any) {
  return dataArray.map((item: any) => {
    // Создаем новый объект, начиная с полей по умолчанию
    const standardizedItem = { ...standardFields };

    // Перебираем ключи в текущем элементе
    for (const key in item) {
      if (standardizedItem.hasOwnProperty(key)) {
        // Если поле существует в стандарте, добавляем его значение
        standardizedItem[key] = item[key];
      }
    }

    return standardizedItem;
  });
}

router.post(
  "/upload-csv",
  upload.single("file"),
  async (req: Request, res: Response): Promise<void> => {
    if (!req.file) {
      res.status(400).json({ error: "Файл не загружен" });
      return;
    }

    const csvFilePath = path.join(__dirname, "../uploads", req.file.filename);
    let jsonData: any[] = [];

    // Удаление BOM, если он присутствует
    const cleanedCsvFile = removeBOM(csvFilePath);
    fs.writeFileSync(csvFilePath, cleanedCsvFile); // Записываем очищенный файл обратно

    // Чтение и парсинг CSV
    fs.createReadStream(csvFilePath)
      .pipe(
        csvParser({
          separator: ";", // Указываем правильный раз��елитель
          quote: '"', // Указываем кавычки для значений
          skipEmptyLines: true, // Пропускать пустые строки
          mapHeaders: ({ header }) => header.trim(), // Убираем пробелы вокруг заголовков
          skipRecordsWithError: true, // Пропускать записи с ошибками
        })
      )
      .on("data", (row) => {
        jsonData.push({
          // Используем ключи из standardFields
          product_name: row["Наименование элемента"],
          drawing: row["Чертёж [CHERTEJ]"] || "",
          material: row["Материал [MATERIAL]"] || "",
          mounting_type: row["Тип монтажа [TIP_MONTAZHA]"] || "",
          type: row["Тип [TYPE]"] || "",
          connection: row["Подключение [PODKLUCHENIE]"],
          luminous_flux: row["Световой поток [SVETOVOYPOTOK]"] || "",
          power_consumption_per_meter:
            row[
              "Потребляемая мощность на 1м [POTREBLYAEMAYA_MOSHCHNOST_NA_1M]"
            ] || "",
          luminous_flux_per_meter:
            row["Световой поток на 1м [SVETOVOJ_POTOK_NA_1M]"] || "",
          socket_type: row["Тип цоколя [TIP_COKOLYA]"] || "",
          lamp_type: row["Тип лампы [TIP_LAMPY]"] || "",
          color_rendering: row["Цветопередача [CVETOPEREDACHA]"] || "",
          beam_angle: row["Угол света [YGOL_SVETA]"] || "",
          ip_rating: row["Степень защиты IP [STEPEN_ZASHCHITY_IP]"],
          output_voltage: row["Выходное напряжение [VIHODNOE_NAPRYAJENIE]"],
          light_source: row["Источник света [ISTOCHNIK_SVETA]"] || "",
          power: row["Мощность [MOSHCHNOST]"] || "",
          color: row["Цвет [COLORS]"] || "",
          color_temperature: row["Цветовая температура [TEMPERATYRA]"] || "",
          dimming: row["Диммирование [DIMMIROVANIE]"] || "",
          base_price: parseFloat(row['Цена "Базовая цена"']),
          announcement_image_url: row["Картинка для анонса (путь)"],
          additional_images: row["Картинки [MORE_PHOTO]"]
            ? row["Картинки [MORE_PHOTO]"].split(";")
            : [],
          barcode: row["Штрихкод [SHTRIHKOD]"],
        });
      })
      .on("end", async () => {
        try {
          // Стандартизируем данные пе��ед сохранением
          const standardizedData = standardizeData(jsonData);

          // Логирование стандартизированных данных для отладки
          console.log(JSON.stringify(standardizedData, null, 2));

          // Сохранение данных в базу данных с указанием всех полей для обновления
          await Product.bulkCreate(standardizedData, {
            updateOnDuplicate: [
              "product_name",
              "drawing",
              "material",
              "mounting_type",
              "type",
              "connection",
              "luminous_flux",
              "power_consumption_per_meter",
              "luminous_flux_per_meter",
              "socket_type",
              "lamp_type",
              "color_rendering",
              "beam_angle",
              "ip_rating",
              "output_voltage",
              "light_source",
              "power",
              "color",
              "color_temperature",
              "dimming",
              "base_price",
              "announcement_image_url",
              "additional_images",
              "barcode",
            ],
          });

          res.status(200).json({
            message: "Файл успешно загружен и данные сохранены в базе данных",
            dataCount: standardizedData.length,
          });
        } catch (error) {
          console.error("Ошибка при сохранении данных в базу:", error);
          res.status(500).json({
            error: `Ошибка при сохранении данных в базу: ${error.message}`,
          });
        }
      })

      .on("error", (error) => {
        console.error("Ошибка при чтении CSV файла:", error);
        res
          .status(500)
          .json({ error: `Ошибка при чтении CSV файла: ${error.message}` });
      });
  }
);

export default router;
