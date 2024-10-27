import express from "express"
import { protectedRoute } from "../middlewares/protectedRoute.js"
import {
  getMessages,
  getUsersForSidebar,
  sendMessage,
} from "../controllers/message.controller.js"

const router = express.Router()

router.get("/conversations", protectedRoute as any, getUsersForSidebar as any)
router.get("/:id", protectedRoute as any, getMessages as any)
router.post("/send/:id", protectedRoute as any, sendMessage)

export { router as messageRoutes }
