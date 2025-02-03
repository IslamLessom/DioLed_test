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
exports.deleteCategory = exports.editCategory = exports.getCategoryId = exports.postCategory = exports.getCategory = void 0;
const category_1 = require("../models/category");
const getCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield category_1.Category.findAll();
        res.status(200).json(categories);
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error instanceof Error ? error.message : "Ошибка",
        });
    }
});
exports.getCategory = getCategory;
const postCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category_name } = req.body;
    try {
        const newCategory = yield category_1.Category.create({ category_name });
        res.status(201).json(newCategory);
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error instanceof Error ? error.message : "Ошибка",
        });
    }
});
exports.postCategory = postCategory;
const getCategoryId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryId = parseInt(req.params.id);
    const category = yield category_1.Category.findByPk(categoryId);
    try {
        if (category) {
            res.status(200).json(category);
        }
        else {
            res.status(404).json({ message: "Category not found" });
        }
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error instanceof Error ? error.message : "Ошибка",
        });
    }
});
exports.getCategoryId = getCategoryId;
const editCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryId = parseInt(req.params.id);
    const { category_name } = req.body;
    try {
        const [updated] = yield category_1.Category.update({ category_name }, { where: { id: categoryId } });
        if (updated) {
            const updatedCategory = yield category_1.Category.findByPk(categoryId);
            res.status(200).json(updatedCategory);
        }
        else {
            res.status(404).json({ message: "Category not found" });
        }
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error instanceof Error ? error.message : "Ошибка",
        });
    }
});
exports.editCategory = editCategory;
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryId = parseInt(req.params.id);
    const deleted = yield category_1.Category.destroy({ where: { id: categoryId } });
    try {
        if (deleted) {
            res.status(204).send();
        }
        else {
            res.status(404).json({ message: "Category not found" });
        }
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error instanceof Error ? error.message : "Ошибка",
        });
    }
});
exports.deleteCategory = deleteCategory;
