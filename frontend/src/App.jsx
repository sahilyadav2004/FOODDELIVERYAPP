
import "./App.css";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Login from "./pages/Login.jsx";
import Signin from "./pages/Signin.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
 
  return (
    <>

      <div className="app">
        <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/contactUs" element={<Contact/>} />
      </Routes>
      </div>
      <Footer />

    </>
  );
}

export default App;
