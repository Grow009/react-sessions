import { useState, useEffect } from "react"

function ThirdCase() {
    const [count, setCount] = useState(1)
    const [age, setAge] = useState(12)
    console.log("Third Case")

    // 3rd Case

    useEffect(() => {
        console.log("")
    }, [count,age])
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
export default ThirdCase