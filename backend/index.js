import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRouter from "./router/userroute.js";
import orderrouter from "./router/placeorderroute.js";
import cartRouter from "./router/cartRoutes.js";
import foodRouter from "./router/foodRoutes.js";


const app = express();
const port=3000;
app.use(express.json());
app.use(cors());
connectDB();

app.use("/api/user",userRouter);
app.use("/api/order",orderrouter);


app.use("/api/cart",cartRouter);
app.use("/api/food",foodRouter);
app.use("/images",express.static("uploads"))


app.get("/",(req,res)=>{
    res.send('API working')
})


app.listen(port,()=>{
    console.log("The app is listening at port"+`${port}`);
})