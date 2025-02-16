"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config/config");
const iniatializeModels_1 = require("./models/iniatializeModels");
//import uploadRoutes from "./uploads/uploadHandler";
const cors_1 = __importDefault(require("cors"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const categoryRouter_1 = __importDefault(require("./routes/categoryRouter"));
const exportRouter_1 = __importDefault(require("./routes/exportRouter"));
const productsRouter_1 = __importDefault(require("./routes/productsRouter"));
const formRouter_1 = __importDefault(require("./routes/formRouter"));
const orderRouter_1 = __importDefault(require("./routes/orderRouter"));
const saveProduct_1 = require("controllers/saveProduct");
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 3001;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Инициализация моделей
(0, iniatializeModels_1.initializeModels)();
// Роуты
app.use("/", authRoutes_1.default);
app.use("/", orderRouter_1.default);
//app.use("/", uploadRoutes);
app.use("/", exportRouter_1.default);
app.use("/", formRouter_1.default);
app.use("/products", productsRouter_1.default);
app.use("/categories", categoryRouter_1.default);
// Синхронизация и запуск сервера
config_1.sequelize
    .sync()
    .then(() => {
    (0, saveProduct_1.main)();
    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
    .catch((error) => console.error("Unable to connect to the database:", error));
