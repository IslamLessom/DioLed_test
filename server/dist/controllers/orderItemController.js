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
exports.deleteOrderItem = exports.updateOrderItem = exports.getAllOrderItems = void 0;
const orderItem_1 = require("../models/orderItem");
// Получить все элементы заказа
const getAllOrderItems = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderItems = yield orderItem_1.OrderItem.findAll();
        res.json(orderItems);
    }
    catch (error) {
        next(error);
    }
});
exports.getAllOrderItems = getAllOrderItems;
// Обновить элемент заказа
const updateOrderItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderItem = yield orderItem_1.OrderItem.findByPk(req.params.id);
        if (!orderItem) {
            res.status(404).json({ error: "Элемент заказа не найден" });
            return;
        }
        yield orderItem.update(req.body);
        res.json(orderItem);
    }
    catch (error) {
        next(error);
    }
});
exports.updateOrderItem = updateOrderItem;
// Удалить элемент заказа
const deleteOrderItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderItem = yield orderItem_1.OrderItem.findByPk(req.params.id);
        if (!orderItem) {
            res.status(404).json({ error: "Элемент заказа не найден" });
            return;
        }
        yield orderItem.destroy();
        res.status(204).send();
    }
    catch (error) {
        next(error);
    }
});
exports.deleteOrderItem = deleteOrderItem;
