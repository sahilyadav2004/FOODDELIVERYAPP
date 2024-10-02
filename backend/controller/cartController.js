import mongoose from "mongoose";
import userModel from "../models/userModel";

const addToCart=async(req,res)=>{
    try{
        let userData=await userModel.findOne({_id:req.body.userId});
    let cartData = userData.cartData;
    let item = req.item._id;
    if(!cartData[item]){
        cartData[item]=1;
    }
    else{
        cartData[item]++;
    }
    await userModel.updateOne({_id:req.body.userId},{cartData});
    res.json({success:"true",message:"added to cart!"});
    }
    catch(error){
        console.log(error);
    }
}