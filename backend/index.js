import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
const app = express();
const port=3000;
app.use(cors());
connectDB();


app.get("/",(req,res)=>{
    res.send('API working')
})


app.listen(port,()=>{
    console.log("The app is listening at port"+`${port}`);
})