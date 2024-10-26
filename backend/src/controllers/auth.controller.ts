import { Request, Response } from "express"
import prisma from "../db/prisma.js"
import bcryptjs from "bcryptjs"
import { generateToken } from "../utils/generateToken.js"

export const signup = async (req: Request, res: Response) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body

    if (!fullname || !username || !password || !confirmPassword || !gender) {
      return res.status(400).json({ error: "Please fill in all fields" })
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" })
    }

    const user = await prisma.user.findUnique({ where: { username } })

    if (user) {
      return res.status(400).json({ error: "Username already exists" })
    }

    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password, salt)

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

    const newUser = await prisma.user.create({
      data: {
        fullname,
        username,
        password: hashedPassword,
        gender,
        profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
      },
    })

    if (newUser) {
      generateToken(newUser.id, res)

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
    res.status(500).json({ error: "Internal Server Error" })
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body
    const user = await prisma.user.findUnique({ where: { username } })

    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" })
    }

    const isPasswordCorrect = await bcryptjs.compare(password, user?.password)

    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid credentials" })
    }

    generateToken(user.id, res)

    res.status(200).json({
      id: user.id,
      fullName: user.fullname,
      username: user.username,
      profilePic: user.profilePic,
    })
  } catch (error: any) {
    console.log("Error in controller", error.message)
    res.status(500).json({ error: "Internal Server Error" })
  }
}
export const logout = async (req: Request, res: Response) => {}
