import express from "express";
import { sequelize } from "./config/config";
import { initializeModels } from "./models/iniatializeModels";
import uploadRoutes from "./uploads/uploadHandler";
import cors from "cors";

import authRoutes from "./routes/authRoutes";
import categoryRouter from "./routes/categoryRouter";
import exportRouter from "./routes/exportRouter";
const app = express();
const PORT = process.env.PORT || 8001;

app.use(cors());
app.use(express.json());

// Инициализация моделей
initializeModels();

// Роуты
app.use("/", authRoutes);
app.use("/", uploadRoutes);
app.use("/", exportRouter);

// Синхронизация и зфапуск сервера
sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error: Error) =>
    console.error("Unable to connect to the database:", error)
  );
