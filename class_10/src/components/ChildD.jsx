
import ChildE from "./ChildE.jsx"
function ChildD({name}) {
  return (
    <div>
      I am Child D
      <hr />

      <ChildE  name={name}/>
    </div>
  )
}

export default ChildD