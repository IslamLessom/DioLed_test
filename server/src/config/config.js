// src/config/config.js
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // Получаем путь к текущему файлу
const __dirname = path.dirname(__filename); // Вычисляем директорию текущего файла

export default {
  development: {
    username: "ruslanmakiev",
    password: null,
    database: "dioled",
    host: "localhost",
    dialect: "postgres",
    define: {
      underscored: true,
    },
    models: [path.join(__dirname, "../src/models")], // Правильный путь к моделям
  },
};
