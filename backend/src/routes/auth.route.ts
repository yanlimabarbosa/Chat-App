import express from "express"
import { login, logout, signup } from "../controllers/auth.controller.js"

const router = express.Router()

router.post("/signup", signup as any)
router.post("/login", login as any)
router.post("/logout", logout)

export { router as authRoutes }
