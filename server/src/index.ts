import express from "express";

import categoryRouter from "./controllers/categoryRouter/categoryRouter";

const app = express();
const port = 3000;

app.use("/", categoryRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
