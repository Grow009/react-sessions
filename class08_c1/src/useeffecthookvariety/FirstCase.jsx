import { useState } from "react"
// import { useEffect } from "react"

function FirstCase() {
    const [count, setCount] = useState(1)
    const [age, setAge] = useState(12)
    console.log("First Case")
    //1st case
    // useEffect(()=>{
    //   console.log("Hello i am runing on 1st render and everr render due to state change")

    // });

     console.log("Hello i am runing on 1st render and everr render due to state change")
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
    )
}
export default FirstCase


