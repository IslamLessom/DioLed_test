"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = exports.deleteOrder = exports.updateOrder = exports.getOrderById = exports.getAllOrders = void 0;
const order_1 = require("../models/order");
const orderItem_1 = require("../models/orderItem");
// Получить все заказы
const getAllOrders = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield order_1.Order.findAll({ include: [orderItem_1.OrderItem] });
        res.json(orders);
    }
    catch (error) {
        res.status(500).json({ error: "Ошибка при получении заказов" });
    }
});
exports.getAllOrders = getAllOrders;
// Получить заказ по ID
const getOrderById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield order_1.Order.findByPk(req.params.id, { include: [orderItem_1.OrderItem] });
        if (!order) {
            res.status(404).json({ error: "Заказ не найден" });
            return;
        }
        res.json(order);
    }
    catch (error) {
        res.status(500).json({ error: "Ошибка при получении заказа" });
    }
});
exports.getOrderById = getOrderById;
// Обновить заказ
const updateOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield order_1.Order.findByPk(req.params.id);
        if (!order) {
            res.status(404).json({ error: "Заказ не найден" });
            return;
        }
        yield order.update(req.body);
        res.json(order);
    }
    catch (error) {
        res.status(500).json({ error: "Ошибка при обновлении заказа" });
    }
});
exports.updateOrder = updateOrder;
// Удалить заказ
const deleteOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield order_1.Order.findByPk(req.params.id);
        if (!order) {
            res.status(404).json({ error: "Заказ не найден" });
            return;
        }
        yield order.destroy();
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: "Ошибка при удалении заказа" });
    }
});
exports.deleteOrder = deleteOrder;
const createOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { customerInfo, comments, products, total_sum, user_id } = req.body;
        const order = yield order_1.Order.create({
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
        const orderItems = yield Promise.all(products.map((product) => orderItem_1.OrderItem.create({
            order_id: order.id,
            product_id: product.id,
            quantity: product.quantity,
            price: product.price,
        })));
        res.status(201).json({ order, orderItems });
    }
    catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ error: "Ошибка при создании заказа" });
    }
});
exports.createOrder = createOrder;
