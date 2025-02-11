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
exports.deleteApplicationForm = exports.editApplicationForm = exports.getApplicationFormById = exports.postApplicationForm = exports.getApplicationForms = void 0;
const form_1 = require("../models/form");
const getApplicationForms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const forms = yield form_1.ApplicationForm.findAll();
        res.status(200).json(forms);
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error instanceof Error ? error.message : "Ошибка",
        });
    }
});
exports.getApplicationForms = getApplicationForms;
const postApplicationForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, phone_number, preferred_call_time, description } = req.body;
    try {
        const newForm = yield form_1.ApplicationForm.create({
            name,
            phone_number,
            preferred_call_time,
            description,
        });
        res.status(201).json(newForm);
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error instanceof Error ? error.message : "Ошибка",
        });
    }
});
exports.postApplicationForm = postApplicationForm;
const getApplicationFormById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const formId = parseInt(req.params.id);
    try {
        const form = yield form_1.ApplicationForm.findByPk(formId);
        if (form) {
            res.status(200).json(form);
        }
        else {
            res.status(404).json({ message: "Заявка не найдена" });
        }
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error instanceof Error ? error.message : "Ошибка",
        });
    }
});
exports.getApplicationFormById = getApplicationFormById;
const editApplicationForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const formId = parseInt(req.params.id);
    const { name, phone_number, preferred_call_time, description } = req.body;
    try {
        const [updated] = yield form_1.ApplicationForm.update({ name, phone_number, preferred_call_time, description }, { where: { id: formId } });
        if (updated) {
            const updatedForm = yield form_1.ApplicationForm.findByPk(formId);
            res.status(200).json(updatedForm);
        }
        else {
            res.status(404).json({ message: "Заявка не найдена" });
        }
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error instanceof Error ? error.message : "Ошибка",
        });
    }
});
exports.editApplicationForm = editApplicationForm;
const deleteApplicationForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const formId = parseInt(req.params.id);
    try {
        const deleted = yield form_1.ApplicationForm.destroy({ where: { id: formId } });
        if (deleted) {
            res.status(204).send();
        }
        else {
            res.status(404).json({ message: "Заявка не найдена" });
        }
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error instanceof Error ? error.message : "Ошибка",
        });
    }
});
exports.deleteApplicationForm = deleteApplicationForm;
