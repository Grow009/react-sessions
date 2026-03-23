
import Navbar from "./components/Navbar.jsx"
import Footer from './components/Footer'
import Home from "./pages/Home.jsx"
import Signup from "./pages/Signup.jsx"
import SingleCardAllInfo from "./pages/SingleCardAllInfo.jsx"
import { Route, Routes } from "react-router-dom"
import About from "./pages/About.jsx"
import Login from "./pages/Login.jsx"
import Contact from "./pages/Contact.jsx"
import { useEffect, useState } from "react"
function App() {
  const [data, setData] = useState([]);

  const [item, setItem] = useState()

  function getItemFromCard(singleData) {
    setItem(singleData)
  }
  const [loader, setLoader] = useState(true);
  async function ApiForCard(url) {
    try {
      const res = await fetch(url);
      const ans = await res.json();
      setData(ans);
      setLoader(false)
      console.log(ans)
    }


    catch (err) {
      setLoader(false)
      console.log("Error Happened ", err)
    }
  }
  useEffect(() => {
    ApiForCard("https://fakestoreapi.com/products")
  }, [])
  return (
    <div style={{ width: "100%" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={data} loader={loader} getItemFromCard={getItemFromCard} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/card-info/:id/:itemname" element={<SingleCardAllInfo product={item} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
