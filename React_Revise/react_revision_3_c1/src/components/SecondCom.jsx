
import { useState } from 'react'
import ThridCom from './ThridCom'

function SecondCom({ g }) {

    const [donName, setDonName] = useState()

    function getNameFromFourthCom(data) {
        setDonName(data)
    }
    return (
        <div>SecondCom

            <hr />
            <p>Naam to suna hoga <b>{donName}</b></p>
            <ThridCom data={g}  getInfo={getNameFromFourthCom}/>
        </div>
    )
}

export default SecondCom