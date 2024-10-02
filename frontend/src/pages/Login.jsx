import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='my-7 mx-auto  flex flex-col items-center justify-center h-[330px]'>
        
      <form className='flex flex-col  border-black rounded-lg   md:w-[30%] md:min-h-[299px] justify-center items-center shadow-black shadow-xl p-7 md:p-0'>
      <h1 className='text-black text-4xl mb-6 text-semibold '>LOGIN</h1>
        <div className='flex flex-col'>
        <label>email: </label>
        <input type="text" name='userName' className='mb-2 md:w-48 w-36 bg-slate-300 rounded-md p-2 border-[1px] border-black '/>
        </div>
        <div>
        <label className='flex flex-col'> Password:</label>
        <input type='password' className='mb-2 md:w-48 w-36 bg-slate-300 rounded-md p-2 border-[1px] border-black' />
        </div>
        <Link to="/signin" className='hover:font-blue'>No account? Signin here!</Link>
        <button className='w-1/2 p-1  text-center my-2 bg-green-700 rounded-lg text-white text-xl'>Login in</button>
      </form>
      
    </div>
  ) 
}

export default Login
