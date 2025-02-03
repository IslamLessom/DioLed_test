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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = require("../models/user");
const express_validator_1 = require("express-validator");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, express_validator_1.body)("username")
        .notEmpty()
        .withMessage("Имя пользователя обязательно")
        .run(req);
    yield (0, express_validator_1.body)("email").isEmail().withMessage("Некорректный email").run(req);
    yield (0, express_validator_1.body)("password")
        .isLength({ min: 6 })
        .withMessage("Пароль должен содержать минимум 6 символов")
        .run(req);
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }
    const { username, email, password } = req.body;
    try {
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const user = yield user_1.User.create({
            username,
            email,
            password: hashedPassword,
        });
        res.status(201).json({ success: true, user });
    }
    catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
            return res.status(400).json({
                success: false,
                message: "Пользователь с таким именем уже существует",
            });
        }
        res.status(500).json({
            success: false,
            message: error instanceof Error ? error.message : "Ошибка при регистрации",
        });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const user = yield user_1.User.findOne({ where: { username } });
        if (!user || !(yield bcrypt_1.default.compare(password, user.password))) {
            return res.status(401).json({
                success: false,
                message: "Неверное имя пользователя или пароль",
            });
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id }, process.env.JWT_SECRET || "your_jwt_secret", {
            expiresIn: "1h",
        });
        res.json({ success: true, token, user });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error instanceof Error ? error.message : "Ошибка при входе",
        });
    }
});
exports.login = login;
