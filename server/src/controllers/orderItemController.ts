import { Request, Response, NextFunction } from "express";
import { OrderItem } from "../models/orderItem";

// Получить все элементы заказа
export const getAllOrderItems = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orderItems = await OrderItem.findAll();
    res.json(orderItems);
  } catch (error) {
    next(error);
  }
};

// Обновить элемент заказа
export const updateOrderItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orderItem = await OrderItem.findByPk(req.params.id);
    if (!orderItem) {
      res.status(404).json({ error: "Элемент заказа не найден" });
      return;
    }
    await orderItem.update(req.body);
    res.json(orderItem);
  } catch (error) {
    next(error);
  }
};

// Удалить элемент заказа
export const deleteOrderItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orderItem = await OrderItem.findByPk(req.params.id);
    if (!orderItem) {
      res.status(404).json({ error: "Элемент заказа не найден" });
      return;
    }
    await orderItem.destroy();
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
