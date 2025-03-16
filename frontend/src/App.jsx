
import "./App.css";
import Foodcard from "./components/Foodcard.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Exploremenuslider from "./components/Exploremenuslider.jsx";
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Placeorder from "./pages/Placeorder.jsx";
import Signin from "./pages/Signin.jsx";

import Login from "./pages/Login.jsx";
import Contact from "./pages/Contact.jsx";
import Success from "./pages/Success.jsx"
import Cancel from "./pages/Cancel.jsx";

function App() {
 
  return (
    <>

      <div className="app min-h-[400px]">
        <Navbar />
      <Routes> 
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/contactUs" element={<Contact/>} />
        <Route path='/order' element={<Placeorder/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/cancel" element={<Cancel/>}/>
      </Routes>
      </div>
      <Footer />

    </>
  );
}

export default App;
