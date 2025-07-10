
import { useState,useContext } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { StoreContext } from '../context/StoreContext';
import { useNavigate } from 'react-router-dom';


const Signin = () => {
  const {email,setemail}=useContext(StoreContext)
  const navigate = useNavigate()
  const url="https://fooddeliveryapp-backend-5zv5.onrender.com";
  const [data, setdata] = useState({
    name:"",
    email:"",
    password:""
})

const onChangeHandler=(event)=>{
    event.preventDefault();
    const name=event.target.name 
    const value=event.target.value
    console.log(name + " : "+value);
    setdata(data=>({...data,[name]:value}))
} 
const onSignin=async (event)=>{
    event.preventDefault()
    const newUrl = `${url}/api/user/register`
    const response=await axios.post(newUrl,data)
    if(response.data.success){
        setemail(response.data.email);
        localStorage.setItem("email",response.data.email)
        alert("signed in !");
        navigate("/");
    }
    else{
        alert(response.data.message)
    }
}


    return (
      <div className="container h-[550px]">
        <div className='my-7 mx-auto  flex flex-col items-center justify-center py-5' >
          <form  onSubmit={onSignin} className='flex flex-col  border-black rounded-lg   w-[30%] min-h-[299px] justify-center items-center shadow-black shadow-xl'>
          <h1 className='text-black text-4xl mb-6 text-semibold '>SIGN IN</h1>
            <div className='flex flex-col'>
            <label>UserName: </label>
            <input type="text" name='name' value={data.name} onChange={(e)=>onChangeHandler(e)} className='mb-2 w-48 bg-slate-300 rounded-md p-2 border-[1px] border-black'/>
            </div>
            <div className='flex flex-col'>
            <label>email: </label>
            <input type="text" name='email' value={data.email} onChange={(e)=>onChangeHandler(e)} className='mb-2 w-48 bg-slate-300 rounded-md p-2 border-[1px] border-black'/>
            </div>
            <div>
            <label className='flex flex-col'> Password:</label>
            <input type='password' name="password"  value={data.password} onChange={(e)=>onChangeHandler(e)} className='mb-2 w-48 bg-slate-300 rounded-md p-2 border-[1px] border-black' />
            </div>
            <Link to="/login" className='text-center'>Already signed in! Login here!!!</Link>
            <button type="submit"  className='w-1/2 p-1  text-center my-2 bg-green-700 rounded-lg text-white text-xl' >Sigin</button>
          </form>
        </div>
        </div>
      ) 
}

export default Signin