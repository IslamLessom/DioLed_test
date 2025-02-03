"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportProductsToCsv = void 0;
const csv_writer_1 = require("csv-writer");
const product_1 = require("../models/product"); // Импортируйте вашу модель Product
// Функция для экспорта продуктов в CSV
const exportProductsToCsv = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_1.Product.findAll({ raw: true });
        if (!products || products.length === 0) {
            res.status(204).send("Нет данных для экспорта."); // Возвращаем статус No Content
            return;
        }
        // Настройка csv-writer для создания строки CSV
        const csvStringifier = (0, csv_writer_1.createObjectCsvStringifier)({
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
    }
    catch (error) {
        res.status(500).send("Ошибка при экспорте данных."); // Возвращаем статус ошибки
    }
});
exports.exportProductsToCsv = exportProductsToCsv;
