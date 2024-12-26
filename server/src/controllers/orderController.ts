import { Request, Response, NextFunction } from "express";
import { Order } from "../models/order";
import { OrderItem } from "../models/orderItem";

// Получить все заказы
export const getAllOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orders = await Order.findAll({ include: [OrderItem] });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Ошибка при получении заказов" });
  }
};

// Получить заказ по ID
export const getOrderById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await Order.findByPk(req.params.id, { include: [OrderItem] });
    if (!order) {
      res.status(404).json({ error: "Заказ не найден" });
      return;
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Ошибка при получении заказа" });
  }
};

// Обновить заказ
export const updateOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      res.status(404).json({ error: "Заказ не найден" });
      return;
    }
    await order.update(req.body);
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Ошибка при обновлении заказа" });
  }
};

// Удалить заказ
export const deleteOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      res.status(404).json({ error: "Заказ не найден" });
      return;
    }
    await order.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Ошибка при удалении заказа" });
  }
};
