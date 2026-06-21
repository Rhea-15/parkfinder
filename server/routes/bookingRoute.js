import express from "express";

import { authMiddleware } from "../middleware/auth.js";
import { cancelBooking, createBooking, deleteBooking, getAllBookings, getMyBookings, updateBookingStatus } from "../controllers/booking.controller.js";
import { validateRequest } from "../middleware/validate.js";
import { createBookingSchema, updateBookingStatusSchema, cancelBookingSchema } from "../validators/booking.validator.js";

const router = express.Router();

// ================== USER BOOKINGS ==================
// Get current user's bookings
router.get("/my-bookings", authMiddleware, getMyBookings);

// Create new booking (user)
router.post("/book", authMiddleware, validateRequest(createBookingSchema), createBooking);

// Cancel booking (user)
router.delete("/cancel/:id", authMiddleware, validateRequest(cancelBookingSchema), cancelBooking);

// ================== ADMIN BOOKINGS ==================
// Get all bookings (admin only)
router.get("/all", authMiddleware,getAllBookings);

// Update booking status (admin only)
router.put("/:id/status", authMiddleware, validateRequest(updateBookingStatusSchema), updateBookingStatus);

// Delete booking (admin only)
router.delete("/admin-delete/:id", authMiddleware, validateRequest(cancelBookingSchema), deleteBooking);

export default router;