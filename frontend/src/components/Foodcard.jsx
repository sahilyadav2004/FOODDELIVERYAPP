import React from 'react'

const Foodcard = ({ key, index, id, name, description, price, image ,category}) => {
  return (
    <div className='flex flex-col w-72 border-black rounded-md border-2 p-5 my-2'>
    <div className=''><img src={image} className='h-56 items-center justify-center' /></div>
    <div className='flex flex-col '>
        <div className='font-bold text-2xl flex justify-between m-2 min-h-24'><div>{name}</div><div>Rs. {price}</div></div>
        <div className='font-semibold'>{description}</div>
        <div className='p-1 w-full text-center my-2 bg-green-700 rounded-lg text-white text-xl'>ADD TO CART</div>
    </div>
    </div>
  )
}

export default Foodcard
