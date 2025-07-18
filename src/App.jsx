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
import PrivacyPolicy from "./Pages/PrivacyPolicy"
import CookiePolicy from "./Pages/CookiePolicy"
import TermsAndConditions from "./Pages/TermsAndConditions"
import ShippingPolicy from "./Pages/ShippingPolicy"
import RefundPolicy from "./Pages/RefundPolicy"

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
       <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
       <Route path="/cookie-policy" element={<CookiePolicy/>}/>
       <Route path="/terms-conditions" element={<TermsAndConditions/>}/>
       <Route path="/shipping-policy" element={<ShippingPolicy/>}/>
       <Route path="/refund-return" element={<RefundPolicy/>}/>
    </Routes>
    <Footer />
    <FloatingButtons/>
    </>
  )
}

export default App
