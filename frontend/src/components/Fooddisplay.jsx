import React from 'react'
import Foodcard from './Foodcard'
import { food_list } from '../assets/Assets'
const Fooddisplay = () => {
  return (
    <div className='grid grid-cols-4'>
      {food_list.map((item)=>{
        return <>
            <Foodcard  name={item.name} image={item.image}  category={item.category} price={item.price} description={item.description} key={item._id} />
        </>
      })}
    </div>
  )
}

export default Fooddisplay
