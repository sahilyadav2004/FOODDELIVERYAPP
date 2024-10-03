import express from "express"
import bodyParser from "body-parser"
import { placeorder, verifyorder } from "../controller/placeorderController.js"

const app = express();
const orderrouter=express.Router()
app.use(bodyParser.json());
orderrouter.post("/place",placeorder)
orderrouter.post("/verify",verifyorder)

export default orderrouter