import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const Success = () => {
    useEffect(() => {
      const clearCart = async () => {
        try {
          const email = localStorage.getItem("email");
          const response = await axios.post("http://localhost:3000/api/user/cartnull", { email });
          console.log(response.data); // Check response
        } catch (error) {
          console.error("Error clearing cart:", error);
        }
      };
  
      clearCart();
    }, []);
  return (
    <div className='flex justify-center items-center min-h-36'>
      Success!
      <Link to='/' className='p-2 w-20 mx-2 rounded-md bg-green-400 font-semibold' >return to home!</Link>
    </div>
  )
}

export default Success
