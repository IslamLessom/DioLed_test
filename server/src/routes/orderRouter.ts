import express from "express";
import * as orderController from "../controllers/orderController";
import * as orderItemController from "../controllers/orderItemController";

const router = express.Router();

// Заказы
router.post("/orders", orderController.createOrder);
router.get("/orders", orderController.getAllOrders);
router.get("/orders/:id", orderController.getOrderById);
router.put("/orders/:id", orderController.updateOrder);
router.delete("/orders/:id", orderController.deleteOrder);

// Элементы заказа
router.get("/order-items", orderItemController.getAllOrderItems);
router.put("/order-items/:id", orderItemController.updateOrderItem);
router.delete("/order-items/:id", orderItemController.deleteOrderItem);

export default router;
