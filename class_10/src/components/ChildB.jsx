import React from 'react'
import ChildC from './ChildC'

function ChildB({name}) {
  return (
    <div>
      I am Child B
      <hr />
      <ChildC  namte={name} />

    </div>
  )
}

export default ChildB