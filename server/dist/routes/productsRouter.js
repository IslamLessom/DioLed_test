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
const saveProduct_1 = require("../controllers/saveProduct"); // Укажи путь к файлу с `main()`
const product_1 = require("../models/product");
const router = express_1.default.Router();
router.get("/upload", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, saveProduct_1.main)();
        res.json({ message: "Продукты обновлены!" });
    }
    catch (error) {
        console.error("Ошибка обновления:", error);
        res.status(500).json({ error: "Ошибка обновления продуктов" });
    }
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { category_id, page = 1, page_size = 12 } = req.query;
        const offset = (Number(page) - 1) * Number(page_size); // Приводим page к числу
        const limit = Number(page_size);
        const whereClause = category_id
            ? { where: { category_id: Number(category_id) } }
            : {};
        const { count, rows } = yield product_1.Product.findAndCountAll(Object.assign(Object.assign({}, whereClause), { limit,
            offset }));
        res.json({
            products: rows,
            total: count,
        });
    }
    catch (error) {
        console.error("Ошибка при получении продуктов:", error);
        res.status(500).json({ error: "Ошибка при получении списка продуктов" });
    }
}));
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { product_name, vendor_code, description, brand, base_price, announcement_image_url, additional_images, url, store, pickup, delivery, category_id, params, } = req.body;
        if (!product_name || !vendor_code || !base_price || !url) {
            return res.status(400).json({ message: "Заполните обязательные поля" });
        }
        const newProduct = yield product_1.Product.create({
            product_name,
            vendor_code,
            description,
            brand,
            base_price,
            announcement_image_url,
            additional_images: additional_images || [],
            url,
            store,
            pickup,
            delivery,
            category_id,
            params: params || {},
            updated_at: new Date(),
        });
        res.status(201).json(newProduct);
    }
    catch (error) {
        console.error("Ошибка при добавлении товара:", error);
        res.status(500).json({ message: "Ошибка сервера", error });
    }
}));
router.get("/random-products", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_1.Product.findAll(); // Получаем все товары
        res.json(products); // Отправляем случайные товары
    }
    catch (error) {
        console.error("Ошибка при получении случайных товаров:", error);
        res.status(500).json({ error: "Ошибка при получении случайных товаров" });
    }
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = parseInt(req.params.id, 10);
        if (isNaN(productId)) {
            return res.status(400).json({ error: "Invalid product ID" });
        }
        const product = yield product_1.Product.findByPk(productId); // Находим продукт по id
        if (!product) {
            return res.status(404).json({ message: "Продукт не найден" });
        }
        res.json(product); // Возвращаем продукт
    }
    catch (error) {
        console.error("Ошибка при получении продукта:", error);
        res.status(500).json({ message: "Ошибка при получении продукта" });
    }
}));
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = parseInt(req.params.id, 10);
        const product = yield product_1.Product.findByPk(productId);
        if (!product) {
            return res.status(404).json({ message: "Продукт не найден" });
        }
        const updatedProduct = yield product.update(req.body);
        res.json(updatedProduct);
    }
    catch (error) {
        console.error("Ошибка при обновлении продукта:", error);
        res.status(500).json({ message: "Ошибка при обновлении продукта" });
    }
}));
const orderItem_1 = require("../models/orderItem");
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = parseInt(req.params.id, 10);
        const product = yield product_1.Product.findByPk(productId);
        if (!product) {
            return res.status(404).json({ message: "Продукт не найден" });
        }
        yield orderItem_1.OrderItem.destroy({ where: { product_id: productId } });
        yield product.destroy();
        res.json({ message: "Продукт удален" });
    }
    catch (error) {
        console.error("Ошибка при удалении продукта:", error);
        res.status(500).json({ message: "Ошибка при удалении продукта" });
    }
}));
exports.default = router;
