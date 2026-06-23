import express from "express";
import {
  enterVehicle,
  exitVehicle,
} from "../controllers/parkingLog.controller.js";
import { authMiddleware, adminMiddleware } from "../middleware/auth.js";

const router = express.Router();

// Vehicle entry and exit (requires auth)
router.post("/:bookingId/enter", authMiddleware, enterVehicle);
router.post("/:bookingId/exit", authMiddleware, exitVehicle);

export default router;