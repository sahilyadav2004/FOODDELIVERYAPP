import mongoose from "mongoose"

export const connectDB= async ()=>{
    await mongoose.connect("mongodb+srv://kavyayadav1980:GA0Y0ywC7aEuYk4N@cluster0.3mql93w.mongodb.net/yumApp").then(()=>{console.log("DB connected! ")})
}
