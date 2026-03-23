import { Link } from "react-router-dom"

function Navbar() {
    return (
        // <div className="navbar">
        //     <a className="nav-link" href="./pages/Home.jsx">Home</a>
        //     <a className="nav-link" href="./pages/Contact.jsx">Contact</a>
        //     <a className="nav-link" href="./pages/About.jsx">About</a>
        // </div>

        <div className="navbar">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
            <Link className="nav-link" to="/about">About</Link>
        </div>
    )
}

export default Navbar