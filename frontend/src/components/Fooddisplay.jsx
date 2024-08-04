import React, { useContext } from 'react'
import Foodcard from './Foodcard'
import  { StoreContext } from '../context/StoreContext'

import { food_list } from '../assets/Assets'
const Fooddisplay = ({category}) => {
  
  // const {category,setcategory}=useContext(StoreContext);
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mx-auto'>
      {food_list.map((item,index)=>{
        if(category==='All' || category===item.category){
          return <>
            <Foodcard  name={item.name} image={item.image}  category={item.category} price={item.price} description={item.description} key={index} id={item._id} />
          </>
        }
      })}
    </div>
  )
}

export default Fooddisplay
