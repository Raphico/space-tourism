import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { navItems } from "../../constants"
import "./navbar.css"

function Navbar() {
  const { pathname } = useLocation()

  const [nav, setNav] = useState(false)
  const toggleNav = () => setNav(prevNav => !prevNav)

  const [active, setActive] = useState(() => {
    return pathname === "/" ? "Home" : 
    pathname.slice(1).replace(/^\w/, c => c.toUpperCase())
  })

  const navElements = navItems.map(({ name, number, link }) => 
    <li key={name}>
      <Link 
        className={`nav-link letter-spacing-2 flex ${
          active === name && "active"
        }`} 
        to={link}
        onClick={() => {
          setActive(name)
          toggleNav()
        }}
      >
        <span className="fw-bold">{number}</span>
        {name}
      </Link>
    </li>
  )
  
  return (
    <nav className="nav flex">
      <div>
        <img src="/logo.svg" alt="space tourism logo"/>
      </div>

      <button 
        className="mobile-menu-toggle"
        aria-controls="primary-navigation"
        data-visible={nav}
        onClick={toggleNav}
      >
        <span className="sr-only">Menu</span>
      </button>

      <ul 
        id="primary-navigation" 
        className="primary-navigation"
        aria-expanded={nav}
        role="list"
      >
        {navElements}
      </ul>
    </nav>
  )
}

export default Navbar