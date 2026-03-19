
import Navbar from "./components/Navbar.jsx";
import Box from "./components/Box.js"
import Footer from "./components/Footer.jsx"
import { useState } from "react";
function App() {
  console.log("1st App")
  // setTimeout(()=>{
  //   console.log("1st App")
  // },1000)


  //  State change hone par code/component rerun hota hai
  const [mark, setMark] = useState(32)
  return (
    <div>

      <Navbar />
      <Box />
      <Footer />

      <button onClick={() => {
        setMark(mark + 1)
      }}>chnage mark</button>
    </div>
  )
}

export default App