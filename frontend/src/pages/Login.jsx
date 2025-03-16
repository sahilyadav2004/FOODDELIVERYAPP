import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useContext} from 'react';
import { StoreContext } from '../context/StoreContext';
import axios from "axios"; 
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const {email,setemail}=useContext(StoreContext);
  
  const navigate = useNavigate();
 
  const url="http://localhost:3000";
  const [data, setdata] = useState({
    name:"",
    email:"",
    password:""
})

const onChangeHandler=(event)=>{
    event.preventDefault();
    const name=event.target.name 
    const value=event.target.value
    console.log(name +" : "+value);
    setdata(data=>({...data,[name]:value}))
}


const onLogin=async (event)=>{
    event.preventDefault()
    const newUrl = `${url}/api/user/login`
    const response=await axios.post(newUrl,data)
    if(response.data.success){
        setemail(response.data.email);
        localStorage.setItem("email",response.data.email)
        navigate("/");
    }
    else{
        alert(response.data.message)
    }
}

  return (
    <div className="login h-[550px]">
    <div className='my-7 mx-auto  flex flex-col items-center justify-center h-[330px]'>
        
      <form  onSubmit={onLogin} className='flex flex-col  border-black rounded-lg   md:w-[30%] md:min-h-[299px] justify-center items-center shadow-black shadow-xl p-7 md:p-0'>
      <h1 className='text-black text-4xl mb-6 text-semibold '>LOGIN</h1>
        <div className='flex flex-col'>
        <label>email: </label>
        <input type="email" name='email'   value={data.email} onChange={(e)=>onChangeHandler(e)}   className='mb-2 md:w-48 w-36 bg-slate-300 rounded-md p-2 border-[1px] border-black '/>
        </div>
        <div>
        <label className='flex flex-col'> Password:</label>
        <input type='password' name='password' value={data.password}  onChange={(e)=>onChangeHandler(e)} className='mb-2 md:w-48 w-36 bg-slate-300 rounded-md p-2 border-[1px] border-black' />
        </div>
        <Link to="/signin" className='hover:font-blue'>No account? Signin here!</Link>
        <button type="submit" className='w-1/2 p-1  text-center my-2 bg-green-700 rounded-lg text-white text-xl'>Login in</button>
      </form>
      
    </div>
    </div>
  ) 
}

export default Login
