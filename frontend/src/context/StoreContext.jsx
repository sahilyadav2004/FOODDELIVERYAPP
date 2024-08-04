import { useState, createContext } from "react";
export const StoreContext=createContext(null);
const StoreContextProvider=(props)=>{
    const [cartItems,setCartItems]=useState({});
    
    const addtocart=async(itemid)=>{
      if (!cartItems[itemid]) {
        setCartItems((prev) => ({ ...prev, [itemid]: 1 }));
      } else {
        setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
      }
      console.log(cartItems);
    }

    const removefromcart=async(itemid)=>{
      setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
    }
    const gettotalamount=async(itemid)=>{
      let totalamount=0;
      for(const i in cartItems){
        if(cartItems[i]>0){
          totalamount+=cartItems[i]*food_list[i].price;
        }
      }
      return totalamount;
    }
    const contextValue = {
        cartItems,
        setCartItems,
        addtocart,
        removefromcart,
        gettotalamount,
      };
      return (
        <StoreContext.Provider value={contextValue}>
          {props.children}
        </StoreContext.Provider>
      );
}
export default StoreContextProvider;