import React, { useContext } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { food_list } from '../assets/Assets'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom'
const Cart = ({}) => {
  const {cartItem,addtocart,removefromcart,gettotalamount}=useContext(StoreContext);
  const navigate=useNavigate();
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
        <td><img src={item.image} className='md:h-14 w-14 h-9 my-4 rounded-full md:rounded-sm ' /></td>
        <td>{item.name}</td>
        <td>{cartItem[item._id]}</td>
        <td>₹ {item.price*cartItem[item._id]}</td>
        <td><i className="fa-solid fa-trash"  onClick={()=>removefromcart(item._id)} ></i></td>
        <td><i className="fa-solid fa-cart-plus"  onClick={()=>addtocart(item._id)} ></i></td>
      </tr>
          )
        }
      })}
    </tbody>
    
  </table>
  <div>
  <div className='flex justify-between w-[50%] mx-auto my-10 '>
      <div className='text-2xl'>Net Total: ₹ {gettotalamount()}</div>
      <div>
        <button onClick={()=>navigate("/order")} className='p-2 w-20 mx-2 rounded-md bg-green-400 font-semibold'>Pay</button>
      </div>
   </div>
  </div>
</div>
   <div className='flex justify-between w-[50%] mx-auto my-10 flex-col md:flex-row'>
      <div className='text-2xl m-2'>Net Total: ₹ {gettotalamount()}</div>
      <div>
        <button className='p-2 w-20 m-2 rounded-md bg-green-400 font-semibold'>Pay</button>
      </div>
   </div>
</div>
  )
}

export default Cart
