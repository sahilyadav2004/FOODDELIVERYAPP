import express from "express"
import { loginUser,registerUser,cartnull } from "../controller/userController.js"

const userRouter=express.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.post("/cartnull",cartnull)
 
export default userRouter