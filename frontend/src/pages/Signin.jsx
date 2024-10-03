
import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {

    return (
        <div className='my-7 mx-auto  flex flex-col items-center justify-center py-5' >
          <form className='flex flex-col  border-black rounded-lg   w-[30%] min-h-[299px] justify-center items-center shadow-black shadow-xl'>
          <h1 className='text-black text-4xl mb-6 text-semibold '>SIGN IN</h1>
            <div className='flex flex-col'>
            <label>UserName: </label>
            <input type="text" name='userName' className='mb-2 w-48 bg-slate-300 rounded-md p-2 border-[1px] border-black'/>
            </div>
            <div className='flex flex-col'>
            <label>email: </label>
            <input type="text" name='userName' className='mb-2 w-48 bg-slate-300 rounded-md p-2 border-[1px] border-black'/>
            </div>
            <div>
            <label className='flex flex-col'> Password:</label>
            <input type='password' className='mb-2 w-48 bg-slate-300 rounded-md p-2 border-[1px] border-black' />
            </div>
            <Link to="/login" className='text-center'>Already signed in! Login here!!!</Link>
            <button className='w-1/2 p-1  text-center my-2 bg-green-700 rounded-lg text-white text-xl' >Sigin</button>
          </form>
        </div>
      ) 
}

export default Signin

