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
      products: rows,
      total: count,
    });
  } catch (error) {
    console.error("Ошибка при получении продуктов:", error);
    res.status(500).json({ error: "Ошибка при получении списка продуктов" });
  }
});
router.post("/", async (req: any, res: any) => {
  try {
    const {
      product_name,
      vendor_code,
      description,
      brand,
      base_price,
      announcement_image_url,
      additional_images,
      url,
      store,
      pickup,
      delivery,
      category_id,
      params,
    } = req.body;

    if (!product_name || !vendor_code || !base_price || !url) {
      return res.status(400).json({ message: "Заполните обязательные поля" });
    }

    const newProduct = await Product.create({
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
  } catch (error) {
    console.error("Ошибка при добавлении товара:", error);
    res.status(500).json({ message: "Ошибка сервера", error });
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

router.put("/:id", async (req: any, res: any) => {
  try {
    const productId = parseInt(req.params.id, 10);
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ message: "Продукт не найден" });
    }

    const updatedProduct = await product.update(req.body);

    res.json(updatedProduct);
  } catch (error) {
    console.error("Ошибка при обновлении продукта:", error);
    res.status(500).json({ message: "Ошибка при обновлении продукта" });
  }
});

import { OrderItem } from "../models/orderItem";

router.delete("/:id", async (req: any, res: any) => {
  try {
    const productId = parseInt(req.params.id, 10);
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ message: "Продукт не найден" });
    }

    await OrderItem.destroy({ where: { product_id: productId } });

    await product.destroy();
    res.json({ message: "Продукт удален" });
  } catch (error) {
    console.error("Ошибка при удалении продукта:", error);
    res.status(500).json({ message: "Ошибка при удалении продукта" });
  }
});

export default router;
