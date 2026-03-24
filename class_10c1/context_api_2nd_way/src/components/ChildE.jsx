
import { contextApi } from '../App.js'
import { useContext } from 'react'
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