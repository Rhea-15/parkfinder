import express from "express";
import {
  getParkingLots,
  getParkingLotById,
  createParkingLot,
  updateParkingLot,
  deleteParkingLot,
} from "../controllers/parkingController.js";
import { authMiddleware } from "../middleware/auth.js";
import { authorizeRoles } from "../middleware/authorizeRoles.js";

const router = express.Router();

// Public routes
router.get("/", getParkingLots);
router.get("/:id", getParkingLotById);

// Admin routes
router.post("/", authMiddleware, authorizeRoles("admin"), createParkingLot);
router.put("/:id", authMiddleware, authorizeRoles("admin"), updateParkingLot);
router.delete("/:id", authMiddleware, authorizeRoles("admin"), deleteParkingLot);

export default router;