import express from "express";
import { sequelize } from "./config/config";
import { initializeModels } from "./models/iniatializeModels";
import uploadRoutes from "./uploads/uploadHandler";
import cors from "cors";

import authRoutes from "./routes/authRoutes";
import categoryRouter from "./routes/categoryRouter";
import exportRouter from "./routes/exportRouter";
import productRouter from "./routes/productRouter";
import formRouter from "./routes/formRouter";

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(cors());
app.use(express.json());

// Инициализация моделей
initializeModels();

// Роуты
app.use("/", authRoutes);
app.use("/", uploadRoutes);
app.use("/", exportRouter);
app.use("/", formRouter);
app.use("/products", productRouter);
app.use("/categories", categoryRouter);

// Синхронизация и запуск сервера
sequelize
  .sync()
  .then(() => {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error: Error) =>
    console.error("Unable to connect to the database:", error)
  );
