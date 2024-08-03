import './App.css'
import Foodcard from './components/Foodcard.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Exploremenuslider from './components/Exploremenuslider.jsx'
import Fooddisplay from './components/Fooddisplay.jsx'
import Cart from './pages/Cart.jsx'

function App() {

  return (
    <>
    <Navbar/>
    <Header/>
    <Exploremenuslider/>
    <Fooddisplay/>
    <Footer/>
    </>
  )
}

export default App
