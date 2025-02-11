"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/applicationFormRoutes.ts
const express_1 = __importDefault(require("express"));
const formController_1 = require("../controllers/formController");
const router = express_1.default.Router();
router.get("/form", formController_1.getApplicationForms);
router.post("/form", formController_1.postApplicationForm);
router.get("/form/:id", formController_1.getApplicationFormById);
router.put("/form/:id", formController_1.editApplicationForm);
router.delete("/form/:id", formController_1.deleteApplicationForm);
exports.default = router;
