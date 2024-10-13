import React from 'react'
import { Link } from 'react-router-dom'
const Cancel = () => {
  return (
    <div>
      couldnt complete the payment for some error!
      contact us to know more!
      <Link to='/cart' className='p-2 w-20 mx-2 rounded-md bg-green-400 font-semibold' >return to cart!</Link>
    </div>
  )
}

export default Cancel
