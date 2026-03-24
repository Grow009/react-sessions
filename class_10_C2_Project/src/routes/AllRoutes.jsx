
import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import SingleCardAllInfo from '../pages/SingleCardAllInfo.jsx'
import Signup from '../pages/Signup.jsx'
import Login from '../pages/Login.jsx'
function AllRoutes() {
    return (


        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/card-info/:id/:itemname" element={<SingleCardAllInfo />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
    )
}

export default AllRoutes