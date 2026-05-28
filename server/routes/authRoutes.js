import express from "express";
import { authMiddleware } from "../middleware/auth.js";
import { login, signup, verify } from "../controllers/auth.controller.js";

const router = express.Router();

// Signup
router.post("/signup",signup);

// Login (User)
router.post("/login",login);

// verify
router.get("/verify", authMiddleware,verify);

export default router;
