import ChildB from "./ChildB"


function ChildA() {

  const name = "Rules and Ethics By Unknown"
  return (
    <div>

      I am Child A
      <hr />
      <ChildB name={name}/>
    </div>
  )
}

export default ChildA