import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { User } from "../models/user";
import { body, validationResult } from "express-validator";

export const register = async (req: Request, res: Response) => {
  await body("username")
    .notEmpty()
    .withMessage("Имя пользователя обязательно")
    .run(req);
  await body("email").isEmail().withMessage("Некорректный email").run(req);
  await body("password")
    .isLength({ min: 6 })
    .withMessage("Пароль должен содержать минимум 6 символов")
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ success: true, user });
  } catch (error: any) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({
        success: false,
        message: "Пользователь с таким именем уже существует",
      });
    }

    res.status(500).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Ошибка при регистрации",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        success: false,
        message: "Неверное имя пользователя или пароль",
      });
    }

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET || "your_jwt_secret",
      {
        expiresIn: "1h",
      }
    );

    res.json({ success: true, token, user });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Ошибка при входе",
    });
  }
};
