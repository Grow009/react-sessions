import { useState } from "react"
import About from "./components/About"
import Home from "./components/Home"


function App() {


  //  make state variable for storing the data of about component

  const [aboutArr, setAboutArr] = useState([]);


  const info = {
    user1: "Syam",
    info: {
      id: 101,
      city: "Indore"
    }
  }
  const userId = 'c2115'

  function getDataFromAbout(datacollect) {
    setAboutArr(datacollect)
    
  }

  console.log(aboutArr)

  return (
    <>
      <Home user={userId} information={info} />
      <About inUser={userId} getDataFromAbout={getDataFromAbout} />
    </>
  )
}

export default App