import React from 'react'
import Danka from './Danka'

function Stove({ itemChaiKe,setChaiRedy,setName }) {
    return (
        <div>
            me stove hu
            <Danka kachra={itemChaiKe} setChaiRedy={setChaiRedy} setName={setName} />
        </div>
    )
}

export default Stove