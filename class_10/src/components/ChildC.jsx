import React from 'react'
import ChildD from './ChildD'

function ChildC({name}) {
  return (
    <div>
      I am Child C
      <hr />
      <ChildD  name={name}/>
    </div>
  )
}

export default ChildC