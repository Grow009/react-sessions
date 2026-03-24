import { useState } from "react";
import { createContext } from "react";
import ChildA from "./components/ChildA"
import ChildB from "./components/ChildB";
import ChildC from "./components/ChildC.jsx"
import ChildD from "./components/ChildD.jsx"
import ChildE from "./components/ChildE.jsx"

//  jab aapke drilling/ lifting me state variable use ho rhe hote hai tab me context yha par banata hu


// step-1 context ko create kar leaya hai
export const contextApi = createContext();




function App() {

  //  step-2
  //   make your variable/state or function jo multiple component me use ho rhehai

  const [userCity, setUserCity] = useState("Indore")

  const name = "Rules and Ethics By Unknown";
  const publisher = "Jk Prakashan"
  //  context ko create kar leaya hai

  function multiPlyOfTwo(x, y) {
    console.log(x * y)
  }
  //  create a obj

  const obj = {
    name,
    publisher,
    multiPlyOfTwo,
    userCity,
    setUserCity
  }
  return (

    <contextApi.Provider value={obj}>
      <ChildA />
      <ChildB />
      <ChildC />
      <ChildD />
      <ChildE />

    </contextApi.Provider>

  )
}

export default App