import userModel from '../models/userModel.js'

//add in user cart   
const addToCart=async(req,res)=>{
    try{
        
        let useData=await userModel.findOne({email:req.body.email});
        if (!useData) {
            return res.json({ success: false, message: "User not found!" });
        }
        let cartData=await useData.cartData;
        if(!cartData[req.body.itemId]){ 
            cartData[req.body.itemId]=1;
        }
        else{
            cartData[req.body.itemId]+=1;
        }
        await userModel.findByIdAndUpdate(useData._id,{cartData})
        res.json({success:true,message:"added to cart!"});
    }catch(error){
        console.log(error)
        res.json({success:false,message:"Error"});
    }
}

//remove from user cart  
const removeFromCart=async(req,res)=>{
    try{
        let  userData = await userModel.findOne({email:req.body.email});
        let cartData=await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId]-=1;
        }
        await userModel.findByIdAndUpdate(userData._id,{cartData});
        res.json({success:true,message:"removed from cart!"})
    }catch(error){
        console.log(error);
        res.json({success:false,message:"error"});
    }
}

//fetch user cart data  
const getCart=async(req,res)=>{
    try{
        let userData=await userModel.findOne({"email":req.body.email});
        // console.log(userData);
        let cartData=await userData.cartData;
        res.json({success:true,cartData})
    }catch(error){
        console.log(error);
        res.json({success:false,message:"error!"})
    }
}

export {addToCart,removeFromCart,getCart}