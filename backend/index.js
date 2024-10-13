import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRouter from "./router/userroute.js";
import orderrouter from "./router/placeorderroute.js";
import cartRouter from "./router/cartRoutes.js";
import foodRouter from "./router/foodRoutes.js";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port=3000;
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
connectDB();

app.use("/api/user",userRouter);
app.use("/api/order",orderrouter);


app.use("/api/cart",cartRouter);
app.use("/api/food",foodRouter);
app.use("/images",express.static("uploads"))

import Stripe from 'stripe';
const stripe = new Stripe(process.env.SECRET_STRIPE_KEY);

app.post("/placeOrder", async (req, res) => {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"], // Corrected to "card"
        mode: "payment",
        line_items: req.body.items.map(item => ({
          price_data: {
            currency: "inr",
            product_data: { name: item.name },
            unit_amount: item.price*100, // Convert to smallest currency unit
          },
          quantity: item.quantity,
        })),
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/cancel",
      });
  
      res.json({ url: session.url }); // Send session URL to frontend
    } catch (error) {
      console.error("Stripe Error:", error); // Log the full error
      res.status(500).json({ error: error.message });
    }
  });


app.get("/",(req,res)=>{
    res.send('API working')
})


app.listen(port,()=>{
    console.log("The app is listening at port"+`${port}`);
})