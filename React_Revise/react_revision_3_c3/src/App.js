
// import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import Home from './pages/Home'

import Navbar from './components1/Navbar.jsx'

import { Route, Routes } from 'react-router-dom'
import About from './pages1/About'
import Home from './pages1/Home'
import Contact from "./pages1/Contact.jsx"

function App() {
  return (
    <div>

      {/* <Navbar />
      <Home />
      <Footer /> */}

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer />
    </div>
  )
}

export default App