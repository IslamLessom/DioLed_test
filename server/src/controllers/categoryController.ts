import express, { Request, Response } from "express";
import { Category } from "../models/category";

export const getCategory = async (req: Request, res: Response) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Ошибка",
    });
  }
};

export const postCategory = async (req: Request, res: Response) => {
  try {
    const { category_name } = req.body;
    const newCategory = await Category.create({ category_name });
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Ошибка",
    });
  }
};

export const getCategoryId = async (req: Request, res: Response) => {
  try {
    const categoryId = parseInt(req.params.id);
    const category = await Category.findByPk(categoryId);
    if (category) {
      res.status(200).json(category);
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Ошибка",
    });
  }
};

export const editCategory = async (req: Request, res: Response) => {
  try {
    const categoryId = parseInt(req.params.id);
    const { category_name } = req.body;

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
    res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Ошибка",
    });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const categoryId = parseInt(req.params.id);

    const deleted = await Category.destroy({ where: { id: categoryId } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Ошибка",
    });
  }
};
