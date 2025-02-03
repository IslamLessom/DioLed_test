"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
const router = (0, express_1.Router)();
// Получение всех товаров
router.get("/", productController_1.getAllProducts);
// Получение товара по ID
router.get("/:id", productController_1.getProductById);
// Создание нового товара
router.post("/", productController_1.createProduct);
// Обновление товара
router.put("/:id", productController_1.updateProduct);
// Удаление товара
router.delete("/:id", productController_1.deleteProductById);
exports.default = router;
