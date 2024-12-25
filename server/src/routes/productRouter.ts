import { Router, RequestHandler } from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProductById,
} from "../controllers/productController";

const router = Router();

// Получение всех товаров
router.get("/", getAllProducts as RequestHandler);

// Получение товара по ID
router.get("/:id", getProductById as RequestHandler);

// Создание нового товара
router.post("/", createProduct as RequestHandler);

// Обновление товара
router.put("/:id", updateProduct as RequestHandler);

// Удаление товара
router.delete("/:id", deleteProductById as RequestHandler);

export default router;
