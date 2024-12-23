// routes/exportRoutes.ts
import express, { Request, Response } from "express";
import { Sequelize } from "sequelize";
import { createObjectCsvStringifier } from "csv-writer";
import { Product } from "../models/product"; // Импортируйте вашу модель Product

const router = express.Router();

// Функция для экспорта продуктов в CSV
const exportProductsToCsv = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    console.log("Начинаем экспорт продуктов");
    const products = await Product.findAll({ raw: true });
    console.log("Полученные продукты:", products);

    if (!products || products.length === 0) {
      console.log("Нет доступных продуктов для экспорта.");
      res.status(204).send("Нет данных для экспорта."); // Возвращаем статус No Content
      return;
    }

    // Настройка csv-writer для создания строки CSV
    const csvStringifier = createObjectCsvStringifier({
      header: [
        { id: "id", title: "ID" },
        { id: "product_name", title: "Product Name" },
        { id: "drawing", title: "Drawing" },
        { id: "material", title: "Material" },
        { id: "mounting_type", title: "Mounting Type" },
        { id: "type", title: "Type" },
        { id: "connection", title: "Connection" },
        { id: "luminous_flux", title: "Luminous Flux" },
        {
          id: "power_consumption_per_meter",
          title: "Power Consumption Per Meter",
        },
        { id: "luminous_flux_per_meter", title: "Luminous Flux Per Meter" },
        { id: "socket_type", title: "Socket Type" },
        { id: "lamp_type", title: "Lamp Type" },
        { id: "color_rendering", title: "Color Rendering" },
        { id: "beam_angle", title: "Beam Angle" },
        { id: "ip_rating", title: "IP Rating" },
        { id: "output_voltage", title: "Output Voltage" },
        { id: "light_source", title: "Light Source" },
        { id: "power", title: "Power" },
        { id: "color", title: "Color" },
        { id: "color_temperature", title: "Color Temperature" },
        { id: "dimming", title: "Dimming" },
        { id: "base_price", title: "Base Price" },
        { id: "announcement_image_url", title: "Announcement Image URL" },
        { id: "barcode", title: "Barcode" },
      ],
    });

    // Генерация CSV строки
    const csvData = csvStringifier.stringifyRecords(products);

    // Установка заголовков для скачивания файла
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", `attachment; filename=products.csv`);

    // Отправка CSV данных в ответе
    res.send(csvData);
  } catch (error) {
    console.error("Ошибка при экспорте данных:", error);
    res.status(500).send("Ошибка при экспорте данных."); // Возвращаем статус ошибки
  }
};

// Определяем маршрут для экспорта
router.get("/export-csv", exportProductsToCsv);

export default router;
