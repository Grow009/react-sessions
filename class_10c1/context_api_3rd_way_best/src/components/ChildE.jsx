import { myContext } from "../context/Context";
import { useContext } from "react";
function ChildE() {

  const { name,publisherName } = useContext(myContext)

  return (
    <div>

      I am Child E
      <hr />
      <p>This name of book is : <b>{name}</b></p>

      <p>Publisher Name : <mark>{publisherName}</mark>



      </p>
    </div>
  )
}

export default ChildE