import  { useState } from 'react'

export default function App() {
  const [age, setAge] = useState(22)

  // let age = 22;
  function increaseAge() {
  
    console.log("Before age",age)
    // age = 90;
      setAge(age + 5)
    // console.log("After age",age)
  }
console.log("After age",age)
  return (
    <div><p><b>Name: </b>Hemant Mapari</p>
      <p><b>Id: </b> C2115</p>
      <p><b>Age: </b>{age}</p>
      <button
        onClick={() => {
          increaseAge()
        }}>increase age</button></div>
  )
}
