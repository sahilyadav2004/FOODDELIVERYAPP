import orderModel from "../models/placeorderModel.js";

const placeorder = async (req, res) => {
  try {
    const neworder = new orderModel({
      userId: req.body.userId,
     items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await neworder.save();
    res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: error.message });
  }
};
const verifyorder=async(req,res)=>{
    const {orderId,success}=req.body
    try {
      if(success=="true"){
        await orderModel.findByIdAndUpdate(orderId,{payment:true})
        res.json({success:true,message:"paid"})
      }
      else{
        await orderModel.findByIdAndDelete(orderId)
        res.json({success:false,message:"not paid"})
      }
    } catch (error) {
      console.log(error);
      res.json({success:false,message:"error"})
      
    }
}
export {placeorder,verifyorder};
