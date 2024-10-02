

import React, { useContext } from 'react'
import  { StoreContext } from '../context/StoreContext'

const Foodcard = ({ key, index, id, name, description, price, image ,category}) => {
  const {addtocart}=useContext(StoreContext)
  return (
    <div className='border-black rounded-md border-2 p-5 m-2 w-80 hover:shadow-2xl' key={key} >
    <div className='flex md:flex-col  '>
    <div className='flex items-center justify-center'><img src={image} className=' w-44 md:h-[12rem] mx-auto hover:shadow-2xl  rounded-lg md:rounded-lg ' /></div>
    <div className='flex flex-col my-2'>
        <div className='font-bold md:text-xl  flex flex-col md:flex-row justify-between m-2 md:min-h-[70px]'><div>{name}</div><div className='mx-3'>Rs. {price}</div></div>
        <div className='font-semibold md:block hidden px-2'>{description}</div>
    </div>
    </div>

    <button className='p-1 w-full text-center my-2 bg-green-700 rounded-lg text-white text-xl' onClick={()=>addtocart(id)}>ADD TO CART</button>
</div>
  )
}

export default Foodcard
