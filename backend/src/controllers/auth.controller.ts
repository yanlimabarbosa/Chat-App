import { Request, Response } from "express"
import prisma from "../db/prisma.js"
import bcrypt from "bcryptjs"

export const signup = async (req: Request, res: Response) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body

    if (!fullname || !username || !password || !confirmPassword || !gender) {
      return res.status(400).json({ error: "Please fill in all the fields" })
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" })
    }

    const user = await prisma.user.findUnique({ where: { username } })

    if (user) {
      return res.status(400).json({ error: "Username already exists" })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    gender === "male" ? "boy" : "girl"

    const profilePic = `https://avatar.iran.liara.run/public/${gender}?username=${username}`

    const newUser = await prisma.user.create({
      data: {
        fullname,
        username,
        password: hashedPassword,
        gender,
        profilePic,
      },
    })

    if (newUser) {
      res.status(201).json({
        id: newUser.id,
        fullname: newUser.fullname,
        username: newUser.username,
        profilePic: newUser.profilePic,
      })
    } else {
      res.status(400).json({ error: "Invalid user data" })
    }
  } catch (error: any) {
    console.log("Error in signup controller", error.message)
    res.status(500).json({ error: "Invalid user data" })
  }
}
export const login = async (req: Request, res: Response) => {}
export const logout = async (req: Request, res: Response) => {}
