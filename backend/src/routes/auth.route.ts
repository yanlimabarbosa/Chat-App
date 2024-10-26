import express from "express"
import { login, logout, signup, getMe } from "../controllers/auth.controller.js"
import { protectedRoute } from "../middlewares/protectedRoute.js"

const router = express.Router()

router.get("/me", protectedRoute as any, getMe as any)
router.post("/signup", signup as any)
router.post("/login", login as any)
router.post("/logout", logout)

export { router as authRoutes }
