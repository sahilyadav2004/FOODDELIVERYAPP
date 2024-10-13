import express from "express";
import { getCart,removeFromCart,addToCart } from "../controller/cartController.js";
// import authMiddleware from "../middleware/auth.js";
const cartRouter= express.Router();

cartRouter.post("/add",addToCart);
cartRouter.post("/remove",removeFromCart);
cartRouter.post("/getCart",getCart);

export default cartRouter;  