import React, { useState } from 'react'

function AverageState() {

    // userName, userAge,city, state, mo
    const [userName, setUserName] = useState("Jagmohan Rai");
    const [userAge, setUserAge] = useState(21);
    const [city, setCity] = useState("Katni")
    const [state, setState] = useState("MP")
    const [phone, setPhone] = useState("822301XXXX")

    function changeInfo() {
        setUserName("Mohit Kumar")
        setCity("Jabalpur")
        setUserAge(16)
        setState("Uttar Pradesh")
        setPhone("812312412")
    }
    return (
        <div>
            <h1>User Information</h1>
            <div class="card">
                <h2 class="name">{userName}</h2>
                <p><strong>Age:</strong> {userAge}</p>
                <p><strong>City:</strong> {city}</p>
                <p><strong>State:</strong> {state}</p>
                <p><strong>Mobile:</strong> {phone}</p>
                <button onClick={() => {
                    changeInfo()


                }}>Change info</button>
            </div>

        </div>
    )
}

export default AverageState