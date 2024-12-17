import express, { Request, Response } from "express";
import multer from "multer";
import fs from "fs";
import csvParser from "csv-parser";
import { Product } from "../models/product"; // Импортируйте вашу модель продукта
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
router.post(
  "/upload-csv",
  upload.single("file"),
  async (req: Request, res: Response): Promise<void> => {
    if (!req.file) {
      res.status(400).json({ error: "Файл не загружен" });
      return;
    }
    const csvFilePath = path.join(__dirname, "../uploads", req.file.filename);
    const jsonFilePath = path.join(__dirname, "data", "data.json"); // Используем фиксированное имя файла

    let jsonData: any[] = [];

    // Удаление BOM, если он присутствует
    const cleanedCsvFile = removeBOM(csvFilePath);
    fs.writeFileSync(csvFilePath, cleanedCsvFile); // Записываем очищенный файл обратно

    // Чтение и парсинг CSV
    fs.createReadStream(csvFilePath)
      .pipe(
        csvParser({
          separator: ";", // Указываем правильный разделитель
          quote: '"', // Указываем кавычки для значений
          skipEmptyLines: true, // Пропускать пустые строки
          mapHeaders: ({ header }) => header.trim(), // Убираем пробелы вокруг заголовков
          skipRecordsWithError: true, // Пропускать записи с ошибками
        })
      )
      .on("data", (row) => {
        jsonData.push(row); // Добавляем каждую строку в jsonData
      })
      .on("end", () => {
        // Убедимся, что директория для хранения данных существует
        const dir = path.dirname(jsonFilePath);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }

        // Записываем данные в файл JSON
        fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));
        res.status(200).json({
          message: "Файл успешно загружен и данные сохранены",
          filePath: jsonFilePath,
        });
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
