import { useState, createContext } from "react";
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