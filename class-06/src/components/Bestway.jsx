import { useState } from 'react'

function Bestway() {
    const [userData, setUserData] = useState({
        userName: "Jagmohan Rai",
        userAge: 21,
        city: "Katni",
        state: "MP",
        phone: "822301XXXX"
    })

    function changeInfo() {
        // setUserData("Mohit Kumar") ek object ko aapne string me convert kar deaya hai jo variable object store kar rha tha vo ab string store kar rha hai

        setUserData({
            ...userData,
            userName: "Mohit Rai",
            userAge: 16,
            city: "Jabalpur",
            state: "Uttar Pradesh",
            phone: "2347893457"
        })
    }
    console.log(userData)
    return (
        <div>
            <h1>User Information</h1>
            <div className="card">
                <h2 className="name">{userData.userName}</h2>
                <p><strong>Age:</strong> {userData.userAge}</p>
                <p><strong>City:</strong> {userData.city}</p>
                <p><strong>State:</strong> {userData.state}</p>
                <p><strong>Mobile:</strong> {userData.phone}</p>
                <button onClick={() => {
                    changeInfo()
                }}>Change info</button>
            </div>

        </div>
    )
}

export default Bestway