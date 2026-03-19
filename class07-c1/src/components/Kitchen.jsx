import React from 'react'
import Stove from './Stove'

function Kitchen({chaiKeSaman,setChaiRedy,setName}) {
    return (
        <div>
            <h1>Me Kitchen me hu</h1>
            <Stove  itemChaiKe={chaiKeSaman}  setChaiRedy={setChaiRedy} setName={setName} />
        </div>
    )
}

export default Kitchen