import React, { useContext } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { food_list } from '../assets/Assets'
import { StoreContext } from '../context/StoreContext'
const Cart = ({}) => {
  const {cartItem,addtocart,removefromcart}=useContext(StoreContext);
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
        if(cartItem[item._id]>0){
          return (
        <tr>
        <td><img src={item.image} className='h-14 w-14 my-4 rounded-full' /></td>
        <td>{item.name}</td>
        <td>{cartItem[item._id]}</td>
        <td>₹ {item.price*cartItem[item._id]}</td>
        <td><i className="fa-solid fa-trash"  onClick={()=>removefromcart(item.id)} ></i></td>
        <td><i className="fa-solid fa-cart-plus"  onClick={()=>addtocart(item.id)} ></i></td>
      </tr>
          )
        }
      })}
    </tbody>
    
  </table>
</div>

    </div>
  )
}

export default Cart
