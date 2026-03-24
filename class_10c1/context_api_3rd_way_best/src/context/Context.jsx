import React, { createContext, useState } from 'react'
// make your context
export const myContext = createContext();
function Context({children}) {
  const [city, setCity] = useState("Indore");
  const publisherName = "Jk Prakashan";
  const name = "Rule and Regulation by unknown"
  function sumOfTwoNo(x, y) {
    console.log(x + y)
  }


  // wrap your state,function and varibale
  const data = {
    city,
    name,
    publisherName,
    setCity,
    sumOfTwoNo
  }

  //  Provide your context
  return (
    <myContext.Provider value={data}>
      {children}
    </myContext.Provider>
  )
}

export default Context