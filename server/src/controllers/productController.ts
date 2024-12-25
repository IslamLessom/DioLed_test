import { Request, Response } from "express";
import { Product } from "../models/product";

// Получение всех товаров
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Получение товара по ID
export const getProductById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ message: "Товар не найден" });
    }

    res.status(200).json(product);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Создание нового товара
export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Обновление товара
export const updateProduct = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    const [updated] = await Product.update(req.body, {
      where: { id: id },
    });

    if (updated) {
      const updatedProduct = await Product.findByPk(id);
      return res.status(200).json(updatedProduct);
    }

    throw new Error("Товар не найден");
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Удаление товара по ID
export const deleteProductById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ message: "Товар не найден" });
    }

    await product.destroy();
    res.status(204).send();
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
