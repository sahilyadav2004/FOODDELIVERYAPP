import express from 'express'
import { addFood,listFood, removeFood } from '../controller/foodController.js'
import multer from 'multer'
const foodRouter=express.Router()
// image storage engine
import bodyParser from 'body-parser';

const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}` )
    }
}) 
const upload =multer({storage:storage})



foodRouter.post("/add",upload.single("image"),addFood);
foodRouter.get("/list",listFood)

foodRouter.post("/remove",removeFood)





export default foodRouter