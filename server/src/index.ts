import express from "express";
import { sequelize } from "./config/config";
import { initializeModels } from "./models/iniatializeModels";
//import uploadRoutes from "./uploads/uploadHandler";
import cors from "cors";

import authRoutes from "./routes/authRoutes";
import categoryRouter from "./routes/categoryRouter";
import exportRouter from "./routes/exportRouter";
import productsRouter from "./routes/productsRouter";
import formRouter from "./routes/formRouter";
import orderRouter from "./routes/orderRouter";
import { main } from "./controllers/saveProduct";

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(cors());
app.use(express.json());

initializeModels();

app.use("/", authRoutes);
app.use("/", orderRouter);
//app.use("/", uploadRoutes);
app.use("/", exportRouter);
app.use("/", formRouter);
app.use("/products", productsRouter);
app.use("/categories", categoryRouter);

sequelize
  .sync()
  .then(async () => {
    try {
      await main();
      app.listen(PORT, "0.0.0.0", () => {
        console.log(`Server is running on port ${PORT}`);
      });
    } catch (error) {
      console.error("Ошибка загрузки данных:", error);
    }
  })
  .catch((error: Error) =>
    console.error("Unable to connect to the database:", error)
  );
