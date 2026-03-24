import React from 'react'
import { useContext } from 'react'
import { contextApi } from '../index.js'
function ChldE() {

  const { name, publisher, multiPlyOfTwo } = useContext(contextApi)
  multiPlyOfTwo(10, 20)

  return (
    <div>

      I am Child E
      <hr />
      <p>This name of book is : <b>{name}</b></p>
      <p>Publisher Name : <b>{publisher}</b></p>
    </div>
  )
}

export default ChldE