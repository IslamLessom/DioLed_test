import express from "express";
import sequelize from "./config/config";
import { initializeUserModel } from "./models/user";
import { initializeCategoryModel } from "./models/category";

import authRoutes from "./routes/authRoutes";
import categoryRouter from "./routes/categoryRouter";

const app = express();
const PORT = process.env.PORT || 8001;

app.use(express.json());

initializeUserModel(sequelize);
initializeCategoryModel(sequelize);

app.use("/", categoryRouter);
app.use("/", authRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error: Error) =>
    console.error("Unable to connect to the database a:", error)
  );
