import express from "express"

const router = express.Router()

router.get("/conversations", (req, res) => {
  res.send("Connversation route")
})

export { router as messageRoutes }
