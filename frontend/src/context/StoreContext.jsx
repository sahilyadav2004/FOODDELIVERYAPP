import { useState, createContext } from "react";
import { food_list } from "../assets/Assets";
export const StoreContext=createContext(null);


const StoreContextProvider=(props)=>{
    const [cartItem,setCartItem]=useState({"-1":-1});
    const [category,setcategory]=useState("All");
    
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
      setCartItem({...cartItem,[itemid]:cartItem-1});
    }
    const gettotalamount=()=>{
      let totalamount=0;
      for(const item in cartItem){
        if(cartItem[item]>0){
          let iteminfo=food_list.find((product)=>product._id===item);
          totalamount+=cartItem[item]*iteminfo.price;
        }
      }
      return totalamount;
    }
    const contextValue = {
        cartItem,
        setCartItem,
        addtocart,
        removefromcart,
        gettotalamount,
        category,
        setcategory,
      };
      return (
        <StoreContext.Provider value={contextValue}>
          {props.children}
        </StoreContext.Provider>
      );
}
export default StoreContextProvider;