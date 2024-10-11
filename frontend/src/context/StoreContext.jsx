
import { useState, createContext,useEffect ,useContext} from "react";
import { food_list } from "../assets/Assets";
import axios from "axios";

export const StoreContext=createContext(null);


const StoreContextProvider=(props)=>{
    const [cartItem,setCartItem]=useState({"-1":-1});
    const [category,setcategory]=useState("All");
    const [food_list, setfood_list] = useState([])
    const [token,settoken]=useState("");
    const url = "http://localhost:3000";

    const addtocart=async(itemid)=>{
      if(!cartItem[itemid]){
        setCartItem({ ...cartItem, [itemid]: 1 });
        console.log(cartItem);
      }
      else{
        setCartItem({...cartItem,[itemid]:cartItem[itemid]+1});
        console.log(cartItem);
      }
    }
    const removefromcart=async(itemid)=>{
      setCartItem({...cartItem,[itemid]:cartItem[itemid]-1});
    }
    const gettotalamount = () => {
      let totalAmount = 0;
      for (const item in cartItem) {
        if (cartItem[item] > 0) {
          let itemInfo = food_list.find((product) => product._id === item);
  
          totalAmount += itemInfo.price * cartItem[item];
        }
      }
      return totalAmount;
    };
    
    const loadCartData=async(token)=>{
      const response=await axios.post(url+"/api/cart/getCart",{},{headers:{token}})
      setCartItem(response.data.cartData)
    }

    const fetchFoodList=async()=>{
      const response=await axios.get(url+"/api/food/list")
      setfood_list(response.data.data)
    }


    useEffect(()=>{
   
      async function loadData(){
        // await fetchFoodList();
        if(localStorage.getItem("token")){
          settoken(localStorage.getItem("token"));
          await loadCartData(localStorage.getItem("token"));
        }
      } 
      loadData()
    },[])


    const contextValue = {
        cartItem,
        setCartItem,
        addtocart,
        removefromcart,
        gettotalamount,
        category,
        setcategory,
        token,settoken,
      };
      return (
        <StoreContext.Provider value={contextValue}>
          {props.children}
        </StoreContext.Provider>
      );
}
export default StoreContextProvider;