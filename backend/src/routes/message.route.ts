import express from "express"
import { protectedRoute } from "../middlewares/protectedRoute.js"
import { sendMessage } from "../controllers/message.controller.js"

const router = express.Router()

router.post("/send/:id", protectedRoute as any, sendMessage)

export { router as messageRoutes }
