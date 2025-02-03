"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config/config");
const iniatializeModels_1 = require("./models/iniatializeModels");
const uploadHandler_1 = __importDefault(require("./uploads/uploadHandler"));
const cors_1 = __importDefault(require("cors"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const categoryRouter_1 = __importDefault(require("./routes/categoryRouter"));
const exportRouter_1 = __importDefault(require("./routes/exportRouter"));
const productRouter_1 = __importDefault(require("./routes/productRouter"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8001;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Инициализация моделей
(0, iniatializeModels_1.initializeModels)();
// Роуты
app.use("/", authRoutes_1.default);
app.use("/", uploadHandler_1.default);
app.use("/", exportRouter_1.default);
app.use("/products", productRouter_1.default);
app.use("/categories", categoryRouter_1.default);
// Синхронизация и запуск сервера
config_1.sequelize
    .sync()
    .then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
    .catch((error) => console.error("Unable to connect to the database:", error));
