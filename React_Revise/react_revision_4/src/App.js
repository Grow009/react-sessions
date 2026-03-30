

import Navbar from './components/Navbar.jsx'

import { Route, Routes } from 'react-router-dom'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Contact from "./pages/Contact.jsx"
import Footer from "./components/Footer.jsx"
import AllInfoCard from './components/AllInfoCard.jsx'
import { useState } from 'react'
function App() {
  const [item, setItem] = useState();
  return (
    <div>


      <Navbar />
      <Routes>
        <Route path="/" element={<Home  setItem={setItem}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category/:categoryName/item/:itemName" element={<AllInfoCard item={item} />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App