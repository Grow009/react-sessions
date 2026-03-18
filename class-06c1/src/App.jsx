import { useState } from "react"
// import Card from "./components/Card"
import BestCart from "./components/BestCart"


function App() {
  const [data, setData ] = useState({
    id: 101,
    name: "Mohan",
    age: 25
  })
  return (
    <div>

      {/* <Card cartData={data}  chnageInfo={setData}></Card> */}
      <BestCart cartData={data}  chnageInfo={setData}/>
    </div>
  )
}

export default App