import React from 'react'

const Foodcard = ({ key, index, id, name, description, price, image }) => {
  return (
    <div className='flex flex-col w-72 border-black rounded-md border-2 p-5'>
    <div className=''><img src='blueberryCake.jpg' /></div>
    <div className='flex flex-col '>
        <div className='font-bold text-2xl flex justify-between m-2'><div>pizza</div><div>Rs. 10</div></div>
        <div className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quidem ab ex ad maiores cupiditate, fuga eligendi modi voluptatibus! Distinctio.</div>
        <div className='p-1 w-full text-center my-2 bg-green-700 rounded-lg text-white text-xl'>ADD TO CART</div>
    </div>
    </div>
  )
}

export default Foodcard
