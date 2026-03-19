
import "./Navbar.css";

function Navbar() {
       console.log("2nd Navbar")
    // setTimeout(() => {
    //     console.log("2nd Navbar")
    // }, 2000)
    return (<nav className="navbar">
        <div className="logo">MySite</div>
        <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
    </nav>)

}

export default Navbar;