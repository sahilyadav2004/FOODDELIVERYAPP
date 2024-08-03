import { useState, createContext } from "react";
export const StoreContext=createContext(null);
const StoreContextProvider=(props)=>{
    const [cartItem,setCartItem]=useState({});
    const [category,setcategory]=useState("All");
    const [food_list, setfood_list] = useState([]);
    const addtocart=async(itemid)=>{
      if(!cartItem[itemid]){
        setCartItem({...cartItem,[itemid]:1});

      }
      else{
        setCartItem({...cartItem,[itemid]:cartItem[itemid]+1});
      }
    }
    const removefromcart=async(itemid)=>{
      setCartItem({...cartItem,[itemid]:cartItem-1});
    }
    const gettotalamount=async(itemid)=>{
      let totalamount=0;
      for(const i in cartItem){
        if(cartItem[i]>0){
          totalamount+=cartItem[i]*food_list[i].price;
        }
      }
      return totalamount;
    }
    const contextValue = {
        cartItem,
        setCartItem,
        addtocart,
        removefromcart,
        gettotalamount
      };
      return (
        <StoreContext.Provider value={contextValue}>
          {props.children}
        </StoreContext.Provider>
      );
}
export default StoreContextProvider;