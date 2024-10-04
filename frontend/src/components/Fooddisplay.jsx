import React, { useContext, useEffect,useState } from 'react'
import Foodcard from './Foodcard'
import axios from "axios"


const Fooddisplay = ({category}) => {
  const url = "http://localhost:3000";
  const [backendFoodList,setBackendFoodList]=useState([]);
  
  const listFood = async(req,res)=>{
    try{
      let response = await axios.get(`${url}/api/food/list`);
      if(response.data.success == true){
          setBackendFoodList(response.data.data);
      }
    }catch(error){
        console.log(error);
    }
  }

  useEffect(()=>{
    listFood();
    console.log(backendFoodList);
  },[])


  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mx-auto'>
      {backendFoodList.map((item,index)=>{
        if(category==='All' || category===item.category){
          return <>
            <Foodcard  name={item.name} image={`${url}/images/`+item.image}  category={item.category} price={item.price} description={item.description} key={index} id={item._id} />
          </>
        }
      })}
    </div>
  )
}

export default Fooddisplay
