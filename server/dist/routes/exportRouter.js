"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/exportRoutes.ts
const express_1 = __importDefault(require("express"));
const exportProducts_1 = require("uploads/exportProducts");
const router = express_1.default.Router();
router.get("/export-csv", exportProducts_1.exportProductsToCsv);
exports.default = router;
