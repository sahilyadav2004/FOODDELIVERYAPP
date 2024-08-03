
import { menu_list } from '../assets/Assets.js'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Exploremenuslider = ({category,setcategory}) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  }
  return (
    <div className='m-auto' id='explore-menu'>
        <h1 className='text-6xl my-4 text-center'>Explore our Menu for Food Items </h1>
        <p className='text-center text-3xl'>Please Choose food items from our diverse menu</p>
        <div className='slider-container md:w-[60%] w-[80%]  mx-auto my-7'>
        <Slider {...settings}>
            {menu_list.map((item,index)=>{
                return (
                    <div key={index} className=' flex  flex-col items-center md:m-5 m-1' onClick={()=>{setcategory(item.menu_name)}}>
                        <img src={item.menu_image} className='h-[100px] w-[100px] rounded-full'/>
                        <p className='ml-8'>{item.menu_name}</p>
                    </div>
            )})
        }
        </Slider>
        </div>
      <hr/>
    </div>
  )
}

export default Exploremenuslider
