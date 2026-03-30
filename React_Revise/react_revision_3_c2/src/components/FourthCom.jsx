import { useContext } from "react"

import { mycontext } from "../context/InfoContext.jsx"
function FourthCom() {

    // GET THE VALUE FROM context

    const { Grade } = useContext(mycontext)

    return (
        <div>FourthCom
            <p>Your Skill Grade is:  <b>{Grade}<sup>+</sup></b></p>
        </div>
    )
}

export default FourthCom