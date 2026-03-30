import { useContext } from "react"
import { mycontext } from "../context/InfoContext"


function SecondCom() {
    const { donName } = useContext(mycontext)
    return (
        <div>SecondCom

            <hr />
            <p>Naam to suna hoga <b>{donName}</b></p>

        </div>
    )
}

export default SecondCom