import { useEffect, useState } from "react";

function App() {

  const [count, setCount] = useState(1)
  const [age, setAge] = useState(12)
  console.log("App")
  //1st case
  // useEffect(()=>{
  //   console.log("Hello i am runing on 1st render and everr render due to state change")

  // });


  // 2nd Case

  useEffect(() => {
    console.log("")
  })
  // 3rd Case 
  useEffect(() => {
    console.log("I  am runing only 1st render of the component")
  }, [count, age])

  return (
    <div className="App">
      <p>Count:{count}</p>
      <button onClick={() => {
        setCount(count + 1)
      }}>change count</button>

      <br>
      </br>

      <p>Current Age:{age}</p>
      <button onClick={() => {
        setAge(age + 1)
      }}>change age</button>
    </div>
  );
}

export default App;
