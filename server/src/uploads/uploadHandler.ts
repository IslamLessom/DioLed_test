import express, { Request, Response } from "express";
import multer from "multer";
import fs from "fs";
import csvParser from "csv-parser";
import { Product } from "../models/product";
import path from "path";
import { fileURLToPath } from "url";
import { parseStringPromise } from "xml2js";

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
    const standardizedItem = { ...standardFields };
    for (const key in item) {
      if (standardizedItem.hasOwnProperty(key)) {
        standardizedItem[key] = item[key];
      }
    }
    return standardizedItem;
  });
}

// Функция для парсинга XML-файла
const parseXmlFile = async (filePath: string): Promise<any[]> => {
  const data = await fs.promises.readFile(filePath, "utf8");
  const result = await parseStringPromise(data);

  // Предполагаем, что данные о продуктах находятся в определенной структуре
  const products = result.products.product; // Измените путь в зависимости от структуры вашего XML
  return products.map((product: any) => ({
    product_name: product.product_name[0],
    drawing: product.drawing ? product.drawing[0] : "",
    material: product.material ? product.material[0] : "",
    mounting_type: product.mounting_type ? product.mounting_type[0] : "",
    type: product.type ? product.type[0] : "",
    connection: product.connection ? product.connection[0] : "",
    luminous_flux: product.luminous_flux ? product.luminous_flux[0] : "",
    power_consumption_per_meter: product.power_consumption_per_meter
      ? product.power_consumption_per_meter[0]
      : "",
    luminous_flux_per_meter: product.luminous_flux_per_meter
      ? product.luminous_flux_per_meter[0]
      : "",
    socket_type: product.socket_type ? product.socket_type[0] : "",
    lamp_type: product.lamp_type ? product.lamp_type[0] : "",
    color_rendering: product.color_rendering ? product.color_rendering[0] : "",
    beam_angle: product.beam_angle ? product.beam_angle[0] : "",
    ip_rating: product.ip_rating ? product.ip_rating[0] : "",
    output_voltage: product.output_voltage ? product.output_voltage[0] : "",
    light_source: product.light_source ? product.light_source[0] : "",
    power: product.power ? product.power[0] : "",
    color: product.color ? product.color[0] : "",
    color_temperature: product.color_temperature
      ? product.color_temperature[0]
      : "",
    dimming: product.dimming ? product.dimming[0] : "",
    base_price: parseFloat(product.base_price) || null,
    announcement_image_url: product.announcement_image_url
      ? product.announcement_image_url[0]
      : "",
    additional_images:
      product.additional_images && Array.isArray(product.additional_images)
        ? product.additional_images.join(";").split(";")
        : [],
    barcode: product.barcode ? product.barcode[0] : "",
  }));
};

router.post(
  "/upload-file",
  upload.single("file"),
  async (req: Request, res: Response): Promise<void> => {
    if (!req.file) {
      res.status(400).json({ error: "Файл не загружен" });
      return;
    }

    const fileExtension = path.extname(req.file.originalname).toLowerCase();
    const filePath = path.join(__dirname, "../uploads", req.file.filename);
    let jsonData: any[] = [];

    // Удаление BOM для CSV
    const cleanedFile = removeBOM(filePath);
    fs.writeFileSync(filePath, cleanedFile); // Записываем очищенный файл обратно

    try {
      if (fileExtension === ".csv") {
        // Чтение и парсинг CSV
        await new Promise((resolve, reject) => {
          fs.createReadStream(filePath)
            .pipe(
              csvParser({
                separator: ";",
                quote: '"',
                skipEmptyLines: true,
                mapHeaders: ({ header }) => header.trim(),
                skipRecordsWithError: true,
              })
            )
            .on("data", (row) => jsonData.push(row))
            .on("end", () => resolve(null))
            .on("error", reject);
        });
      } else if (fileExtension === ".xml") {
        // Парсинг XML
        jsonData = await parseXmlFile(filePath);
      } else {
        res.status(400).json({ error: "Неподдерживаемый формат файла" });
        return;
      }

      // Стандартизируем данные перед сохранением
      const standardizedData = standardizeData(jsonData);

      // Сохранение данных в базу данных
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
      console.error("Ошибка при обработке файла:", error);
      res.status(500).json({
        error: `Ошибка при обработке файла: ${error.message}`,
      });
    }
  }
);

export default router;
