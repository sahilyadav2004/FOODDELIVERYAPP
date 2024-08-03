import React from 'react'
import Header from '../components/Header.jsx'
import Fooddisplay from '../components/Fooddisplay.jsx'
import Exploremenuslider from '../components/Exploremenuslider.jsx'
import { useState } from 'react'
const Home = () => {
  const [category,setcategory]=useState("All");
  return (
    <div>
      <Header/>
      <Exploremenuslider  category={category} setcategory={setcategory}/>
      <Fooddisplay  category={category}/>
    </div>
  )
}

export default Home
