import express, { Request, Response } from "express";
import { Category } from "../models/category";
import {
  deleteCategory,
  editCategory,
  getCategory,
  getCategoryId,
  postCategory,
} from "../controllers/categoryController";

const categoryRouter = express.Router();

categoryRouter.get("/", async (req: Request, res: Response) => {
  try {
    await getCategory(req, res);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving categories", error });
  }
});

categoryRouter.post("/", async (req: Request, res: Response) => {
  try {
    await postCategory(req, res);
  } catch (error) {
    res.status(400).json({ message: "Error creating category", error });
  }
});

categoryRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    await getCategoryId(req, res);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving category", error });
  }
});

categoryRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    await editCategory(req, res);
  } catch (error) {
    res.status(400).json({ message: "Error updating category", error });
  }
});

categoryRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    await deleteCategory(req, res);
  } catch (error) {
    res.status(500).json({ message: "Error deleting category", error });
  }
});

export default categoryRouter;
