
import "./App.css";
import Foodcard from "./components/Foodcard.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Exploremenuslider from "./components/Exploremenuslider.jsx";
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'

function App() {
 
  return (
    <>

      <div className="app">
        <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      </div>
      <Footer />

    </>
  );
}

export default App;
