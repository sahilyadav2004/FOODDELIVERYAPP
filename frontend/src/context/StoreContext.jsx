
import { useState, createContext,useEffect ,useContext} from "react";
import { food_list } from "../assets/Assets";
import axios from "axios";
export const StoreContext = createContext(null);
 



const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({"-1":-1});
  const [food_list, setfood_list] = useState([])
 const url="https://fooddeliveryapp-backend-5zv5.onrender.com"
  const [email,setemail]=useState("")  

  const addToCart = async(itemId) => {
    if(!email){
      console.log("please login");
      alert("please login or signin first!")
    }
    else {
      console.log("addToCart: Adding item with ID:", itemId);
    console.log("cartItems: "+cartItems);
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      
    }
    console.log(cartItems);

    if(email){
      
      await axios.post(url+"/api/cart/add",{itemId,email});
    }
    else{
      console.log("email state is not found!");
    }
    }
  };
  const removeFromCart = async(itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(email){
      await axios.post(url+"/api/cart/remove",{itemId,email});
    }
  };

  const loadCartData=async()=>{
    const email = localStorage.getItem("email");
    const response=await axios.post(url+"/api/cart/getCart",{email});
    setCartItems(response.data.cartData)
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);

        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };


  const fetchFoodList=async()=>{
    const response=await axios.get(url+"/api/food/list")
    console.log("Fetched food list data:", response.data);
    setfood_list(response.data.data)
  }


  useEffect(()=>{
    async function loadData(){
      await fetchFoodList();
      if(localStorage.getItem("email")){
        setemail(localStorage.getItem("email"));
        await loadCartData(localStorage.getItem("email"));
        console.log("email loaded:"+ email);
      }
      else{
        alert("please sigin or login!");
      }
    } 
    loadData()
  },[])
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,email,setemail
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
