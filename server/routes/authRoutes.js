import express from "express";
import crypto from "node:crypto";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authMiddleware } from "../middleware/auth.js";
import { sendPasswordResetEmail } from "../utils/email.js";
import { signup, login, verify, forgotPassword, resetPassword } from "../controllers/auth.controller.js";
import { authLimiter, resetLimiter } from "../middleware/rateLimiter.js";
import { validateRequest } from "../middleware/validate.js";
import { signupSchema, loginSchema, forgotPasswordSchema, resetPasswordSchema } from "../validators/auth.validator.js";
import { authLimiter, resetLimiter } from "../middleware/rateLimiter.js";


const router = express.Router();

// Signup
router.post("/signup", authLimiter, validateRequest(signupSchema), signup);

// Login (User)
router.post("/login", authLimiter, validateRequest(loginSchema), login);

// Forgot password
router.post("/forgot-password", resetLimiter, validateRequest(forgotPasswordSchema), forgotPassword);

// Reset password
router.post("/reset-password", resetLimiter, validateRequest(resetPasswordSchema), resetPassword);

// verify
router.get("/verify", authMiddleware,verify);

export default router;
