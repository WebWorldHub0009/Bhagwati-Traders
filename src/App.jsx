import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import AboutPage from "./Pages/AboutPage"
import ScrollToTop from "./Components/ScrollToTop"
import FloatingButtons from "./Components/FloatingButtons"
import Footer from "./Components/Footer"
import ProductsPage from "./Pages/ProductsPage"
import Certifications from "./Pages/Certifications"
import ContactPage from "./Pages/ContactPage"

function App() {
  return (
    <>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<AboutPage/>}/>
       <Route path="/products" element={<ProductsPage/>}/>
       <Route path="/certificates" element={<Certifications/>}/>
       <Route path="/contact" element={<ContactPage/>}/>
    </Routes>
    <Footer />
    <FloatingButtons/>
    </>
  )
}

export default App
