import express, { Request, Response } from "express";
import { main } from "../controllers/saveProduct"; // Укажи путь к файлу с `main()`
import { Product } from "../models/product";

const router = express.Router();

router.get("/upload", async (req, res) => {
  try {
    await main();
    res.json({ message: "Продукты обновлены!" });
  } catch (error) {
    console.error("Ошибка обновления:", error);
    res.status(500).json({ error: "Ошибка обновления продуктов" });
  }
});

router.get("/", async (req, res) => {
  try {
    const { category_id, page = 1, page_size = 12 } = req.query;

    const offset = (Number(page) - 1) * Number(page_size); // Приводим page к числу
    const limit = Number(page_size);

    const whereClause = category_id
      ? { where: { category_id: Number(category_id) } }
      : {};

    const { count, rows } = await Product.findAndCountAll({
      ...whereClause,
      limit,
      offset,
    });

    res.json({
      products: rows, // Возвращаем товары
      total: count, // Возвращаем общее количество товаров
    });
  } catch (error) {
    console.error("Ошибка при получении продуктов:", error);
    res.status(500).json({ error: "Ошибка при получении списка продуктов" });
  }
});

router.get("/random-products", async (req, res) => {
  try {
    const products = await Product.findAll(); // Получаем все товары

    res.json(products); // Отправляем случайные товары
  } catch (error) {
    console.error("Ошибка при получении случайных товаров:", error);
    res.status(500).json({ error: "Ошибка при получении случайных товаров" });
  }
});

// Получить продукт по ID
router.get("/:id", async (req: any, res: any) => {
  try {
    const productId = parseInt(req.params.id, 10);
    if (isNaN(productId)) {
      return res.status(400).json({ error: "Invalid product ID" });
    }
    const product = await Product.findByPk(productId); // Находим продукт по id
    if (!product) {
      return res.status(404).json({ message: "Продукт не найден" });
    }
    res.json(product); // Возвращаем продукт
  } catch (error) {
    console.error("Ошибка при получении продукта:", error);
    res.status(500).json({ message: "Ошибка при получении продукта" });
  }
});

// Обновить продукт по ID
router.put("/:id", async (req: any, res: any) => {
  try {
    const productId = parseInt(req.params.id, 10);
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ message: "Продукт не найден" });
    }

    // Обновляем продукт новыми данными из тела запроса
    const updatedProduct = await product.update(req.body);

    res.json(updatedProduct); // Возвращаем обновленный продукт
  } catch (error) {
    console.error("Ошибка при обновлении продукта:", error);
    res.status(500).json({ message: "Ошибка при обновлении продукта" });
  }
});

// Удалить продукт по ID
router.delete("/:id", async (req: any, res: any) => {
  try {
    const productId = parseInt(req.params.id, 10);
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ message: "Продукт не найден" });
    }

    // Удаляем продукт
    await product.destroy();
    res.json({ message: "Продукт удален" });
  } catch (error) {
    console.error("Ошибка при удалении продукта:", error);
    res.status(500).json({ message: "Ошибка при удалении продукта" });
  }
});

export default router;
