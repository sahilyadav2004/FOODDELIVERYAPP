import mongoose from "mongoose";
import foodmodel from "../models/foodModel.js";
import fs from "fs";


const addFood=async(req,res)=>{
    let image_filename=`${req.file.filename}`
    const food=new foodmodel({
        name:req.body.name,
        price:req.body.price,
        image:image_filename,
        description:req.body.description,
        category:req.body.category,

    })
    try {
        await food.save()
        res.status(200).json({success:true,message:"food added successfully"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
    }
}



const listFood=async(req,res)=>{
    try {
        const  foods=await foodmodel.find({});
        res.status(200).json({success:true,data:foods})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
    }
}

const removeFood=async(req,res)=>{
    try {
        const food=await foodmodel.findById(req.body._id);
        fs.unlink(`uploads/${food.image}`,()=>{})
        await foodmodel.findByIdAndDelete(req.body._id)
        res.status(200).json({success:true,message:"food removed successfully"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
    }

}

export {addFood,listFood,removeFood};