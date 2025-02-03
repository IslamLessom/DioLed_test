"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const child_process_1 = require("child_process");
// Путь к папке с моделями
const modelsPath = (0, path_1.join)(__dirname, "..", "models");
// Путь к папке миграций
const migrationsPath = (0, path_1.join)(__dirname, "..", "migrations"); // Убедитесь, что папка migrations существует
// Читаем все файлы моделей в указанной папке
const modelFiles = (0, fs_1.readdirSync)(modelsPath).filter((file) => file.endsWith(".ts"));
// Для каждого файла создаем миграцию
modelFiles.forEach((modelFile) => {
    const modelName = modelFile.replace(".ts", "");
    // Запускаем команду для генерации миграции с указанием пути к миграциям
    try {
        (0, child_process_1.execSync)(`npx sequelize-cli migration:generate --name create-${modelName} --migrations-path ${migrationsPath}`, { stdio: "inherit" });
    }
    catch (error) {
        console.error(`Error generating migration for model ${modelName}:`, error);
    }
});
console.log("Migrations generated for all models.");
