import { useEffect, useState } from "react"
import Home from "./Home"
import Card from "./use-effect-2nd/Card.jsx"
import SingleCard from "./use-effect-3rd/SingleCard.jsx"
function App() {
  const [name, setName] = useState("Hemant Mapari")
  const [id, setId] = useState("C2115")
  const [age, setAge] = useState(21)


  // useEffect hook 
  /* 1 Case. 
  component 1st time render hone par or component ke rerender hone par(component rerender tab hota jab component ki state change hoti hai) jab to me case 1 ka use karta hu
   useEffect jab callback pass karte ho, dependency array nhi pass karte ho,
   to appke component ke rerender(load) hone me callback ke andar likha gya code automatically chal jata hai

  useEffect(() => {
    console.log("Rerender")
  })

   */

  /*2nd Case. 
  component only 1st time render hone par tab  me case 2 ka use karta hu
  es case me callback function ke sath empty dependency array pass karte hai
  useEffect(() => {
    console.log("only 1st time chalunga")
  },[])
   */


  /*3rd Case. 
component  1st time render hone par and dependecy array me jo state variable hai unki value change hone par tab  me case 3 ka use karta hu
es case me callback function ke sath  dependency array or uske andar variable/state pass karni padti hai 

  useEffect(() => {
    console.log("only 1st time and id kee value chnage hone par chalunga")
  }, [id])

 */











  console.log("component rendered")
  return (
    <div>
      {/* <p><b>Name:</b>{name}</p>
      <p><b>age:</b>{age}</p> */}
      {/* <p><b>id:</b>{id}</p>
      <button onClick={() => {
        setId(id + 1)
      }}>chnage id</button> */}
      {/* <button onClick={() => {
        setAge(age + 1)
      }}>chnage age</button> */}

      {/* <Home/> */}
      {/* <Card /> */}
      <SingleCard/>
    </div>
  )
}

export default App