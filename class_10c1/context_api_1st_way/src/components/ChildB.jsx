import React from 'react'
import ChildC from './ChildC'
import { useContext } from 'react'
import { contextApi } from '../index.js'

function ChildB() {

  const {name}=useContext(contextApi)
  return (
    <div>
      I am Child B <mark><i>{name}</i></mark>
      <hr />


    </div>
  )
}

export default ChildB