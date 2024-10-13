import React from 'react'
import { Link } from 'react-router-dom'
const Cancel = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-96'>
      couldnt complete the payment for some error!
      contact us to know more!
      <Link to='/cart' className='p-2 w-auto m-5 rounded-md bg-green-400 font-semibold' >return to cart!</Link>
    </div>
  )
}

export default Cancel
