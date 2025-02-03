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
exports.deleteProductById = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getAllProducts = void 0;
const product_1 = require("../models/product");
// Получение всех товаров
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_1.Product.findAll();
        res.status(200).json(products);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});
exports.getAllProducts = getAllProducts;
// Получение товара по ID
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const product = yield product_1.Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: "Товар не найден" });
        }
        res.status(200).json(product);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});
exports.getProductById = getProductById;
// Создание нового товара
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_1.Product.create(req.body);
        res.status(201).json(product);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});
exports.createProduct = createProduct;
// Обновление товара
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const [updated] = yield product_1.Product.update(req.body, {
            where: { id: id },
        });
        if (updated) {
            const updatedProduct = yield product_1.Product.findByPk(id);
            return res.status(200).json(updatedProduct);
        }
        throw new Error("Товар не найден");
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});
exports.updateProduct = updateProduct;
// Удаление товара по ID
const deleteProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const product = yield product_1.Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: "Товар не найден" });
        }
        yield product.destroy();
        res.status(204).send();
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});
exports.deleteProductById = deleteProductById;
