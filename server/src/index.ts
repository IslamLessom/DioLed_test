import express from "express";
import sequelize from "./config/config";
import { initializeUserModel } from "./models/user";

import categoryRouter from "./controllers/categoryRouter";
import authRoutes from "./routes/authRoutes";

const app = express();
const PORT = process.env.PORT || 8001;

app.use(express.json());

initializeUserModel(sequelize);

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
