import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom';
import AddFood from './pages/AddFood.jsx';
import Navbar from './components/Navbar.jsx';
import ListFood from './pages/ListFood.jsx';

function App() {
  

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/add' element={<AddFood />}/>
        <Route path='/list' element={<ListFood />}/>
        <Route path='/' element={<AddFood />}/>
      </Routes>
    </>
  )
}

export default App