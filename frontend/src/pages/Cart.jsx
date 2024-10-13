
import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'



const Cart = ({}) => {
  const {cartItems,addToCart,removeFromCart,getTotalCartAmount,food_list,email}=useContext(StoreContext);
  const url = "http://localhost:3000"
  const navigate=useNavigate();

  const checkout=async ()=>{
    try{
      const res = await fetch("http://localhost:3000/placeOrder",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        mode:"cors",
        body:JSON.stringify({
          items:[
            {
              id:1,
              quantity:1,
              price:getTotalCartAmount(),
              name:"cart"
            }
          ]
        })
      });
      const data=await res.json();
      if (data.url) {
        window.location = data.url; 
      } else {
        console.error("Checkout session URL is undefined");
      }
    }
    catch(error){
      console.log(error);
    }
  }


  if(!email){
    return <Link className='flex justify-center flex-col items-center min-h-screen'  to="/login">
      please sigin or login!!!
    </Link>
  }
  else{
    return (
    
      <div className='min-h-[90%]'>
  
      <div className="overflow-x-auto  mt-24 mx-7">
    <table className="table table-xs">
      <thead>
        <tr>
          <th>image</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>price</th>
          <th>Remove</th>
          <th>Add</th>
        </tr>
      </thead>
      <tbody>
        {food_list.map(item=>{
          {console.log(item._id,cartItems)}
          if(cartItems[item._id] && cartItems[item._id]>0){
            return (
          <tr key={item._id}>
          <td><img src={`${url}/images/`+item.image} className='md:h-14 w-14 h-9 my-4 rounded-full md:rounded-sm ' /></td>
          <td>{item.name}</td>
          <td>{cartItems[item._id]}</td>
          <td>₹ {item.price*cartItems[item._id]}</td>
          <td><i className="fa-solid fa-trash"  onClick={()=>removeFromCart(item._id)} ></i></td>
          <td><i className="fa-solid fa-cart-plus"  onClick={()=>addToCart(item._id)} ></i></td>
        </tr>
            )
          }
        })}
      </tbody>
      
    </table>
    <div>
    <div className='flex justify-between w-[50%] mx-auto my-10 '>
        <div className='text-2xl'>Net Total: ₹ {getTotalCartAmount()}</div>
        <div>
          <button className='p-2 w-20 mx-2 rounded-md bg-green-400 font-semibold' onClick={checkout}>Pay</button>
        </div>
     </div>
    </div>
    </div>
    </div>
    )
  }

}

export default Cart
