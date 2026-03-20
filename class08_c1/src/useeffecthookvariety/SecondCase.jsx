import { useState, useEffect } from "react"

function SecondCase() {
    const [count, setCount] = useState(1)
    const [age, setAge] = useState(12)
    console.log("Second Case")

    // 2nd Case

    useEffect(() => {
        console.log("Second Case me only 1st render me chelega")
    }, [])
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
export default SecondCase