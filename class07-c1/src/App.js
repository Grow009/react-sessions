
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx"
import Kitchen from "./components/Kitchen.jsx";
import { useState } from "react";
function App() {


  const [isChaiReady, setChaiRedy] = useState(false);
  const [name, setName] = useState(null)
  console.log(name)
  const [saman, setSaman] = useState({
    item1: "Sakkar",
    item2: "ChaiPatti",
    item3: "Milk",
    item4: "Tulsi",
    item5: "Pani",
    item6: "Adrak"
  })
  return (
    <div>

      <Navbar />
      <Kitchen chaiKeSaman={saman} setChaiRedy={setChaiRedy} setName={setName} />
      <h1>

        {
          isChaiReady ? (<b>Chai ready ho gyi hai</b>) : (<b>Chai nhi bni hai</b>)
        }
      </h1>

      {
        name && <h2>Chai Banane Vala:{name}</h2>
      }
      <Footer />
    </div>
  )
}

export default App