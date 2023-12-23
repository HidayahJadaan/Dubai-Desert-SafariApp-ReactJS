import React, { useState } from "react";
import DubaiLogo from "../../images/logo.png";
import "./header.css";
import Navbar from "./Navbar";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header">
      <div className="logo">
        <img src={DubaiLogo} alt="DubiLogo" className="logo-img" />
        <div className="logo-text">
          <b>DUBAI</b>
          <b>DESERT</b>
          <b>SAFARI</b>
        </div>
      </div>
    <Navbar  toggle={toggle} setToggle={setToggle}/>
      {/* HEADER MENU */}
      <div className="header-menu" onClick={() => setToggle(prev =>!prev)}>
        {toggle ?  <i class="ri-close-fill"></i>: <i class="ri-list-check"></i>}
      </div>
    </header>
  );
}
