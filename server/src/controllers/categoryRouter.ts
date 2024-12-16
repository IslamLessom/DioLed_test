import express, { Request, Response } from "express";
import { Category } from "../models/category"; // Путь к вашей модели Category

const categoryRouter = express.Router();

// Получение всех категорий
categoryRouter.get("/", async (req: Request, res: Response) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving categories", error });
  }
});

// Создание новой категории
categoryRouter.post("/", async (req: Request, res: Response) => {
  const { category_name } = req.body;

  try {
    const newCategory = await Category.create({ category_name });
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ message: "Error creating category", error });
  }
});

// Получение категории по ID
categoryRouter.get("/:id", async (req: Request, res: Response) => {
  const categoryId = parseInt(req.params.id);

  try {
    const category = await Category.findByPk(categoryId);
    if (category) {
      res.status(200).json(category);
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving category", error });
  }
});

// Обновление категории по ID
categoryRouter.put("/:id", async (req: Request, res: Response) => {
  const categoryId = parseInt(req.params.id);
  const { category_name } = req.body;

  try {
    const [updated] = await Category.update(
      { category_name },
      { where: { id: categoryId } }
    );
    if (updated) {
      const updatedCategory = await Category.findByPk(categoryId);
      res.status(200).json(updatedCategory);
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (error) {
    res.status(400).json({ message: "Error updating category", error });
  }
});

// Удаление категории по ID
categoryRouter.delete("/:id", async (req: Request, res: Response) => {
  const categoryId = parseInt(req.params.id);

  try {
    const deleted = await Category.destroy({ where: { id: categoryId } });
    if (deleted) {
      res.status(204).send(); // Успешное удаление без содержимого
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting category", error });
  }
});

export default categoryRouter;
