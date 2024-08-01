import { useState, createContext } from "react";
export const StoreContext=createContext(null);
const StoreContextProvider=(props)=>{
    const [cartItem,setCartItem]=useState({});
    const contextValue = {
        cartItem,
        setCartItem,
      };
      return (
        <StoreContext.Provider value={contextValue}>
          {props.children}
        </StoreContext.Provider>
      );
}
export default StoreContextProvider;