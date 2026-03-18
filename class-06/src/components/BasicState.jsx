
import { useState } from "react"

function BasicState() {

    /*
    Hooks-> predefine function which is used to make the state from state less to state active and also give lots of
   functionality such as sideeffects, routing, form handling, global state management and error handling and so on...
  
  1. useState() Hook-: 
  
   */

    //  syntex of useState hook-:
    const [userName, setUserName] = useState("Abhijeet Kumar");// const userName="Abhijeet Kumar", function setUserName(){userName="Somjeet Kumar"}
    const [userAge, setUserAge] = useState(26);

    return (
        <div>
            <p>User Name is:<b>{userName}</b> </p>
            <p>User Age is:<b>{userAge}</b> </p>
            <button onClick={() => {
                setUserName("Somjeet Kumar")
            }}>Change Name</button>
            <button onClick={() => {
                setUserAge(20)
            }}>Change Age</button>

        </div>
    )
}

export default BasicState