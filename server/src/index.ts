import express from "express";

import categoryRouter from "./controllers/categoryRouter";
import authRoutes from "./routes/authRoutes";

const app = express();
const port = 3000;

app.use("/", categoryRouter);
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
