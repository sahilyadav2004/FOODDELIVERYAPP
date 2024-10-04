import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import validator from "validator";

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email }); 
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    else{
       return res.status(201).json({ message: "login  successfully" });
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
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      email,
      name,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};
export { loginUser, registerUser };
