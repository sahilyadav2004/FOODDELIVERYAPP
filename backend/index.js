import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import cartRouter from "./routes/cartRoutes.js"
import foodRouter from "./routes/foodRoutes.js";

const app = express();
const port=3000;


app.use(cors());
app.use(express.json());


connectDB();
app.use("/api/cart",cartRouter);
app.use("/api/food",foodRouter);
app.use("/images",express.static("uploads"))

app.get("/",(req,res)=>{
    res.send('API working')
})


app.listen(port,()=>{
    console.log("The app is listening at port"+`${port}`);
})