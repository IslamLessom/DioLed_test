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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const csv_parser_1 = __importDefault(require("csv-parser"));
const product_1 = require("../models/product");
const xml2js_1 = require("xml2js");
const stream_1 = require("stream");
const sequelize_1 = require("sequelize");
const router = express_1.default.Router();
// Настройка multer для хранения файла в памяти
const upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
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
function standardizeData(dataArray) {
    return dataArray.map((item) => {
        const standardizedItem = Object.assign({}, standardFields);
        for (const key in item) {
            if (standardizedItem.hasOwnProperty(key)) {
                standardizedItem[key] = item[key];
            }
        }
        return standardizedItem;
    });
}
// Функция для парсинга XML-данных
const parseXmlData = (xmlData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, xml2js_1.parseStringPromise)(xmlData);
    const products = result.products.product;
    return products.map((product) => ({
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
        additional_images: product.additional_images && Array.isArray(product.additional_images)
            ? product.additional_images.join(";").split(";")
            : [],
        barcode: product.barcode ? product.barcode[0] : "",
    }));
});
router.post("/upload-file", upload.single("file"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (!req.file || !req.file.buffer) {
        res.status(400).json({ error: "Файл не загружен или некорректен" });
        return;
    }
    const fileExtension = (_a = req.file.originalname.split(".").pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    let jsonData = [];
    try {
        if (fileExtension === "csv") {
            // Обработка CSV
            const csvOptions = {
                separator: ";",
                quote: '"',
                mapHeaders: ({ header }) => header.trim(),
            };
            yield new Promise((resolve, reject) => {
                stream_1.Readable.from(req.file.buffer)
                    .pipe((0, csv_parser_1.default)(csvOptions))
                    .on("data", (row) => {
                    try {
                        jsonData.push(row);
                    }
                    catch (error) {
                        console.error("Error processing row:", error);
                        // Пропускаем проблемную запись
                    }
                })
                    .on("end", resolve)
                    .on("error", reject);
            });
        }
        else if (fileExtension === "xml") {
            // Обработка XML
            const xmlData = req.file.buffer.toString("utf8");
            jsonData = yield parseXmlData(xmlData);
        }
        else {
            res.status(400).json({ error: "Неподдерживаемый формат файла" });
            return;
        }
        // Стандартизируем данные
        const standardizedData = standardizeData(jsonData);
        // Получаем все баркоды из загруженных данных
        const barcodes = standardizedData
            .map((item) => item.barcode)
            .filter(Boolean);
        // Получаем существующие товары из базы данных по баркодам
        const existingProducts = yield product_1.Product.findAll({
            where: {
                barcode: {
                    [sequelize_1.Op.in]: barcodes,
                },
            },
        });
        // Создаем Map для быстрого доступа к существующим товарам по баркоду
        const existingProductsMap = new Map(existingProducts.map((product) => [product.barcode, product]));
        // Разделяем данные на обновления и новые записи
        const updates = [];
        const newRecords = [];
        for (const item of standardizedData) {
            if (existingProductsMap.has(item.barcode)) {
                updates.push(item);
            }
            else {
                newRecords.push(item);
            }
        }
        // Обновляем существующие товары
        for (const update of updates) {
            yield product_1.Product.update(update, {
                where: { barcode: update.barcode },
            });
        }
        // Добавляем новые товары
        if (newRecords.length > 0) {
            yield product_1.Product.bulkCreate(newRecords);
        }
        res.status(200).json({
            message: "Данные успешно обработаны и сохранены в базе данных",
            updatedCount: updates.length,
            newCount: newRecords.length,
        });
    }
    catch (error) {
        console.error("Ошибка при обработке файла:", error);
        res.status(500).json({
            error: `Ошибка при обработке файла: ${error.message}`,
        });
    }
}));
exports.default = router;
