import React from 'react'

export default function Navbar({toggle, setToggle}) {
  return (
    <nav style={{clipPath: toggle && "polygon(0 1%, 100% 0, 100% 100%, 0 100%)"}} className="navbar">
    <ul className="navbar-links">
      <li className="navbar-link" onClick={()=>setToggle(false)}>
        <i class="ri-home-2-fill"></i> Home
      </li>
      <li className="navbar-link" onClick={()=>setToggle(false)}>
        <i class="ri-home-office-fill"></i> About
      </li>
      <li className="navbar-link" onClick={()=>setToggle(false)}>
        <i class="ri-arrow-right-circle-line"></i> Login
      </li>
      <li className="navbar-link" onClick={()=>setToggle(false)}>
        <i class="ri-user-fill"></i> Register
      </li>
    </ul>
  </nav>
  )
}
