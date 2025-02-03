// routes/exportRoutes.ts
import express from "express";
import { exportProductsToCsv } from "../uploads/exportProducts";

const router = express.Router();

router.get("/export-csv", exportProductsToCsv);

export default router;
