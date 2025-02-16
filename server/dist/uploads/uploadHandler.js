"use strict";
{
    /*import express, { Request, Response } from "express";
  import multer from "multer";
  import csvParser, { Options } from "csv-parser";
  import { Product } from "../models/product";
  import { parseStringPromise } from "xml2js";
  import { Readable } from "stream";
  import { Op } from "sequelize";
  
  const router = express.Router();
  
  // Настройка multer для хранения файла в памяти
  const upload = multer({ storage: multer.memoryStorage() });
  
  const standardFields: { [key: string]: string | number | null | string[] } = {
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
  
  function standardizeData(dataArray: any[]): any[] {
    return dataArray.map((item: any) => {
      const standardizedItem: { [key: string]: any } = { ...standardFields };
      for (const key in item) {
        if (standardizedItem.hasOwnProperty(key)) {
          standardizedItem[key] = item[key];
        }
      }
      return standardizedItem;
    });
  }
  
  // Функция для парсинга XML-данных
  const parseXmlData = async (xmlData: string): Promise<any[]> => {
    const result = await parseStringPromise(xmlData);
    const products = result.products.product;
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
      if (!req.file || !req.file.buffer) {
        res.status(400).json({ error: "Файл не загружен или некорректен" });
        return;
      }
  
      const fileExtension = req.file.originalname.split(".").pop()?.toLowerCase();
      let jsonData: any[] = [];
  
      try {
        if (fileExtension === "csv") {
          // Обработка CSV
          const csvOptions: Options = {
            separator: ";",
            quote: '"',
            mapHeaders: ({ header }) => header.trim(),
          };
  
          await new Promise((resolve, reject) => {
            Readable.from(req.file!.buffer)
              .pipe(csvParser(csvOptions))
              .on("data", (row) => {
                try {
                  jsonData.push(row);
                } catch (error) {
                  console.error("Error processing row:", error);
                  // Пропускаем проблемную запись
                }
              })
              .on("end", resolve)
              .on("error", reject);
          });
        } else if (fileExtension === "xml") {
          // Обработка XML
          const xmlData = req.file.buffer.toString("utf8");
          jsonData = await parseXmlData(xmlData);
        } else {
          res.status(400).json({ error: "Неподдерживаемый формат файла" });
          return;
        }
  
        // Стандартизируем данные
        const standardizedData = standardizeData(jsonData);
  
        // Получаем все баркоды из загруженных данных
        const barcodes = standardizedData
          .map((item: { barcode: string }) => item.barcode)
          .filter(Boolean);
  
        // Получаем существующие товары из базы данных по баркодам
        const existingProducts = await Product.findAll({
          where: {
            barcode: {
              [Op.in]: barcodes,
            },
          },
        });
  
        // Создаем Map для быстрого доступа к существующим товарам по баркоду
        const existingProductsMap = new Map(
          existingProducts.map((product) => [product.barcode, product])
        );
  
        // Разделяем данные на обновления и новые записи
        const updates = [];
        const newRecords = [];
  
        for (const item of standardizedData) {
          if (existingProductsMap.has(item.barcode)) {
            updates.push(item);
          } else {
            newRecords.push(item);
          }
        }
  
        // Обновляем существующие товары
        for (const update of updates) {
          await Product.update(update, {
            where: { barcode: update.barcode },
          });
        }
  
        // Добавляем новые товары
        if (newRecords.length > 0) {
          await Product.bulkCreate(newRecords);
        }
  
        res.status(200).json({
          message: "Данные успешно обработаны и сохранены в базе данных",
          updatedCount: updates.length,
          newCount: newRecords.length,
        });
      } catch (error: any) {
        console.error("Ошибка при обработке файла:", error);
        res.status(500).json({
          error: `Ошибка при обработке файла: ${error.message}`,
        });
      }
    }
  );
  
  export default router;
  */
}
