import React from 'react'

const Contact = () => {
  return (
    <div className="bg-[url('https://watermark.lovepik.com/photo/20211209/large/lovepik-vegetable-food-background-material-picture_501697070.jpg')] min-h-[90vh] bg-no-repeat bg-cover">
      <div className='text-black text-center '>
        <h1 className='text-5xl font-semibold pt-28'>GET IN TOUCH</h1>
        <div className='flex w-[55%] mx-auto justify-between my-auto items-center min-h-[70vh] p-5'>
            <div className='text-left text-xl font-semibold font-serif'>
                <div><i className=" mx-2 fa-solid fa-phone" style={{"color": "#fafcff;"}} ></i>+91 9969077***</div>
                <div><i className=" mx-2 fa-solid fa-envelope" style={{"color": "#fafcff;"}} ></i>YumAPPOrder@gmail.com</div>
                <p><i className=" mx-2 fa-solid fa-location-dot" style={{"color": "#fafcff;"}} ></i>Thanesar,Kururkshetra,136118</p>
            </div>
            <form className='flex flex-col  border-black rounded-lg   md:w-[50%] md:min-h-[299px] justify-center items-center shadow-black shadow-xl p-7 md:p-0  '>
      <h1 className='text-black text-4xl mb-6 text-semibold '>LOGIN</h1>
        <div className='flex flex-col text-left text-black font-bold'>
        <label>email: </label>
        <input type="text" name='userName' className='mb-2 md:w-48 w-36 bg-slate-300 rounded-md p-2 border-[1px] border-black '/>
        </div>
        <div className='text-left'>
        <label className='flex flex-col text-black font-bold'> Password:</label>
        <textarea name='description' className='mb-2 md:w-48 w-36 bg-slate-300 rounded-md p-2 border-[1px] border-black' />
        </div>
        
      </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
