import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { food_list } from '../assets/Assets'
const Cart = ({}) => {
  return (
    <>

    <div className="overflow-x-auto  mt-24 mx-7">
  <table className="table table-xs">
    <thead>
      <tr>
        <th>image</th>
        <th>Name</th>
        <th>price</th>
        <th>Remove</th>
        <th>Add</th>
      </tr>
    </thead>
    <tbody>
      {food_list.map(item=>{
        return <>
        <tr>
        <td><img src={item.image} className='h-14 w-14 my-4 rounded-full' /></td>
        <td>{item.name}</td>
        <td>₹ {item.price}</td>
        <td><i className="fa-solid fa-trash"></i></td>
        <td><i className="fa-solid fa-cart-plus"></i></td>
      </tr>
        </>
      })}
    </tbody>
    
  </table>
</div>

    </>
  )
}

export default Cart
