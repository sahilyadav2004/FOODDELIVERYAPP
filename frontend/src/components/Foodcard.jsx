import React from 'react'

const Foodcard = ({ key, index, id, name, description, price, image ,category}) => {
  return (
    <div className='border-black rounded-md border-2 p-5 m-2 w-80' key={key}>
    <div className='flex md:flex-col  '>
    <div className='flex items-center justify-center'><img src={image} className=' w-44 md:h-56 mx-auto   rounded-lg md:rounded-none' /></div>
    <div className='flex flex-col my-2'>
        <div className='font-bold md:text-xl  flex flex-col md:flex-row justify-between m-2 md:min-h-[83px]'><div>{name}</div><div className='mx-3'>Rs. {price}</div></div>
        <div className='font-semibold md:block hidden px-2'>{description}</div>
    </div>
    </div>
    <div className='p-1 w-full text-center my-2 bg-green-700 rounded-lg text-white text-xl'>ADD TO CART</div>
    </div>
  )
}

export default Foodcard
