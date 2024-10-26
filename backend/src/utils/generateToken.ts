import jwt from "jsonwebtoken"
import { response, Response } from "express"

export const generateToken = (userId: string, res: Response) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET!, {
    expiresIn: "15d",
  })

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in ms
    httpOnly: true, //prevent XSS
    sameSite: "strict", //CSRF attack
    secure: process.env.NODE_ENV !== "development", // HTTPS
  })

  return token
}
