import { useState } from "react"
import ChildComponent from "./ChildComponents"
function App() {

  const [user, setUser] = useState({})

  function getData(data) {
    // setUser(data)
  }
  return (
    <div>

      <div className="card">
        <h2>Name:{user?.name}</h2>
        <p className="info">City: {user?.city}</p>
        <p className="info">Age: {user?.age}</p>
      </div>
      <ChildComponent  getData={getData} setUser={setUser}/>
    </div>
  )
}

export default App