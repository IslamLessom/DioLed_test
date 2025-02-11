// routes/applicationFormRoutes.ts
import express from "express";
import {
  getApplicationForms,
  postApplicationForm,
  getApplicationFormById,
  editApplicationForm,
  deleteApplicationForm,
} from "../controllers/formController";

const router = express.Router();

router.get("/form", getApplicationForms);
router.post("/form", postApplicationForm);
router.get("/form/:id", getApplicationFormById);
router.put("/form/:id", editApplicationForm);
router.delete("/form/:id", deleteApplicationForm);

export default router;
