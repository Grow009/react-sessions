import React from 'react'
import { contextApi } from '../App.js'
import { useContext } from 'react'

function ChildB() {
  const { name } = useContext(contextApi)

  return (
    <div>
      I am Child B <mark><i>{name}</i></mark>
      <hr />


    </div>
  )
}

export default ChildB