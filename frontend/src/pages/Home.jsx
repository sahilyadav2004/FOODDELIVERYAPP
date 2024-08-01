import React from 'react'
import Header from '../components/Header.jsx'
import Fooddisplay from '../components/Fooddisplay.jsx'
import Exploremenuslider from '../components/Exploremenuslider.jsx'
const Home = () => {
  return (
    <div>
      <Header/>
      <Exploremenuslider/>
      <Fooddisplay/>
    </div>
  )
}

export default Home
