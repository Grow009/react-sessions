import Navbar from "./components/Navbar.jsx"
import Footer from './components/Footer'
import AllRoutes from "./routes/AllRoutes.jsx"

function App() {
  return (
    <div style={{ width: "100%" }}>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  )
}

export default App
