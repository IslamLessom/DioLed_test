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

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { customerInfo, comments, products, total_sum, user_id } = req.body;

    const order = await Order.create({
      user_id: user_id || null, // Добавьте это поле
      username: customerInfo.username,
      firstname: customerInfo.firstname,
      phone: customerInfo.phone,
      address: customerInfo.address,
      comments,
      total_sum,
      status: "pending",
    });

    // Создаем элементы заказа
    const orderItems = await Promise.all(
      products.map((product: any) =>
        OrderItem.create({
          order_id: order.id,
          product_id: product.id,
          quantity: product.quantity,
          price: product.price,
        })
      )
    );

    res.status(201).json({ order, orderItems });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ error: "Ошибка при создании заказа" });
  }
};
