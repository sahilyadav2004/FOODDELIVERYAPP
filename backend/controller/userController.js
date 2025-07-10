import userModel from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import validator from "validator";



const loginUser = async (req, res) => { 
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email }); 
    if (!user) {
      return res.status(400).json({ success:false,message: "Invalid email" });
    }
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({success:false, message: "Invalid  password" });
    }
    else{
       return res.status(201).json({success:true, message: `${email} login  successfully` ,email});
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};


const registerUser = async (req, res) => {
  const { email,name, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }
    if (!validator.isEmail(email))
      return res
        .status(400)
        .json({ success: false, message: "please enter a valid email" });
    if (password.length < 8) {
      return res.json({  
        success: false,
        message: "Please enter a strong password",
      });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = new userModel({
      email,
      name,
      password: hashedPassword,
    });
    await newUser.save();
    
    res.status(201).json({success:true,email, message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};
const cartnull=async(req,res)=>{ 
  const { email, password } = req.body;
  try{
    const user = await userModel.findOne({ email }); 
    user.cartData={};
    await user.save();
    res.json({success:true,message:"cart is null"});
    console.log("cart is now null !");
  }
  catch{
    console.log(error);
    res.json({ success: false, message: "error" });
  }
 
};
export { loginUser, registerUser,cartnull };
