import express from "express";
import { getCart,removeFromCart,addToCart } from "../controller/cartController.js";
const cartRouter= express.Router();

cartRouter.post("/add",addToCart);
cartRouter.post("/remove",removeFromCart);
cartRouter.post("/getCart",getCart);

export default cartRouter;

