import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { toast } from 'react-toastify'

const AddFood = () => {
  const url="http://localhost:3000"
  const [image, setimage] = useState(false)
    const [data, setdata] = useState({
        name: '',
        price: '',
        description: '',
        category: 'cake',
    })
    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setdata(data=>({...data,[name]:value}))
        console.log(name +" : "+value)
    }
const onSubmitHandler=async (event)=>{
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('price',Number(data.price));
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('image', image);
    
    for (let pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }
    const response=await axios.post(`${url}/api/food/add`,formData)
    if(response.data.success){
        setdata({
            name: '',
            price: '',
            description: '',
            category: 'cake',
        })
        setimage(false)
        toast.success(response.data.message)
    }
    else{
        toast.error(response.data.message)
    }
  }
  return (
    <div className='my-7 mx-auto  flex flex-col items-center justify-center py-5' >
          <form className='flex flex-col  border-black rounded-lg   w-[90%] min-h-[299px] justify-center items-center shadow-black shadow-xl' onSubmit={onSubmitHandler}>
          <h1 className='text-black text-4xl mb-6 text-semibold '>ADD FOOD</h1>
            <div className='flex flex-col w-[40%]'>
            <label>Upload Image: </label>
            <input type="file" onChange={(e)=>setimage(e.target.files[0])} name='image' id="image" className='mb-2 w-[100%] bg-slate-300 rounded-md p-2 border-[1px] border-black'/>
            </div>
            <div className='flex flex-col w-[40%]'>
            <label>Product Name: </label>
            <input type="text" onChange={onChangeHandler} name='name' value={data.name} className='mb-2 w-[100%] bg-slate-300 rounded-md p-2 border-[1px] border-black'/>
            </div>
            <div className='flex flex-col w-[40%]'>
            <label>Description</label>
            <textarea  name='description' onChange={onChangeHandler} value={data.description} className='mb-2 w-[100%] bg-slate-300 rounded-md p-2 border-[1px] border-black' row="6" />
            </div>
            <div className='flex flex-col w-[40%]'>
            <label > Price:</label>
            <input type='number' onChange={onChangeHandler} name='price' value={data.price} className='mb-2 w-[100%] bg-slate-300 rounded-md p-2 border-[1px] border-black' />
            </div>
            <div className='flex flex-col w-[40%]'>
            <label > Category:</label>
            <select className='mb-2 w-[100%] bg-slate-300 rounded-md p-2 border-[1px] border-black' onChange={onChangeHandler} value={data.category} name="category">
                <option value="cake">Cake</option>
                <option value="Rolls">Rolls</option>
                <option value="Pizza">Pizza</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Burger">Burger</option>
                <option value="Samosa">Samosa</option>
                <option value="Paratha">Paratha</option>
                <option value="Shake">Shake</option>
                <option value="Biryani">Biryani</option>
            </select>
            </div>
            <button className='w-1/2 p-1  text-center my-2 bg-green-700 rounded-lg text-white text-xl' >ADD</button>
          </form>
        </div>
  )
}

export default AddFood
