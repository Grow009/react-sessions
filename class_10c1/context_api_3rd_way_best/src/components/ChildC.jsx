
import { useContext } from "react"
import { myContext } from "../context/Context.jsx"
function ChildC() {

  const { city } = useContext(myContext)
  return (
    <div>
      I am Child C
      <hr />
      <p>City Name is : <mark>{city}</mark></p>
    </div>
  )
}

export default ChildC