// Header component for the application
import { useState } from "react"

function Header(){
    const [isNavOpen, setIsNavOpen] = useState(false)

    return(
        <header>
            <h1 className="header-title">LILLY</h1>
            <button className="hamburger" onClick={() =>
                setIsNavOpen(true)
            }>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav className={`header-nav ${isNavOpen ? 'active' : ''}`}>
            <button className="close-btn" onClick={() => 
                setIsNavOpen(false)
            }>✕</button>
            <a className="header-link" href="https://www.linkedin.com/in/lilliana-adamo-9782a224b/">linkedin</a>
            <a className="header-link" href="https://github.com/ladamo-rrc">github</a>
            <a className="header-link" href="contact.html">Contact</a>
            </nav>
        </header>
    )
}
export default Header