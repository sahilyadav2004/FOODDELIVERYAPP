import React, { useState ,useEffect} from 'react'
import axios from "axios";
import {toast} from 'react-toastify'


const ListFood = () => {
    const url = "https://fooddeliveryapp-backend-5zv5.onrender.com"
    const [foodList,setFoodList]=useState([]);
    const fetchFood=async (req,res)=>{
        const response=await axios.get(`${url}/api/food/list`);
        console.log(response.data);
    if(response.data.success){
      setFoodList(response.data.data);
    }
    else{
      toast.error("Error")
    }
    }

    const removeFood=async(itemId)=>{
        const response=await axios.post(`${url}/api/food/remove`,{_id:itemId})
        await fetchFood();
    } 

    useEffect(()=>{(fetchFood())},[]);
  return (
    <div className='min-h-[90%] w-[70%] flex flex-col justify-center items-center mx-auto '>

    <div className="overflow-x-auto  mt-24 mx-7 w-[100%]">
  <table className="table table-xs w-[100%]">
    <thead>
      <tr>
        <th>image</th>
        <th>Name</th>
        <th>Id</th>
        <th className='w-20'>price</th>
        <th>Description</th>
        <th>category</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {foodList.map((item,index)=>{

          return (
        <tr>
        <td><img src={`${url}/images/`+item.image} className='h-22 w-28 my-2 md:rounded-sm ' /></td>
        <td>{item.name}</td>
        <td>{item._id}</td>
        <td className='w-20'>₹ {item.price}</td>
        <td>{item.description}</td>
        <td>{item.category}</td>
        <td  onClick={()=>removeFood(item._id)} className='cursor-pointer'>Remove</td>
      </tr>
          )

      })}
    </tbody>
    
  </table>
  </div>
  </div>
  )
}

export default ListFood