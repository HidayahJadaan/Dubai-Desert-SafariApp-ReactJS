import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({toggle, setToggle}) {
  return (
    <nav style={{clipPath: toggle && "polygon(0 1%, 100% 0, 100% 100%, 0 100%)"}} className="navbar">
    <ul className="navbar-links">
      <Link to="/" className="navbar-link" onClick={()=>setToggle(false)}>
        <i class="ri-home-2-fill"></i> Home
      </Link>
      <Link to="/about" className="navbar-link" onClick={()=>setToggle(false)}>
        <i class="ri-home-office-fill"></i> About
      </Link>
      <Link to="/login" className="navbar-link" onClick={()=>setToggle(false)}>
        <i class="ri-arrow-right-circle-line"></i> Login
      </Link>
      <Link to="/register" className="navbar-link" onClick={()=>setToggle(false)}>
        <i class="ri-user-fill"></i> Register
      </Link>
    </ul>
  </nav>
  )
}
