import React from 'react'
import logo from "./pics/Logo.png"

export default function Header() {
    return (
<nav className="nav">
      <div className="nav-left">
        <a className="nav-item" href='# '>
          <img src={logo} alt=""/>
        </a>
      </div>
    
      <div className="nav-center">
        <a className="nav-item" href="https://github.com/Amani215">
          <span className="icon">
            <i className="fa fa-github"></i>
          </span>
        </a>
        <a className="nav-item" href="https://www.linkedin.com/in/amanibrik5/">
          <span className="icon">
            <i className="fa fa-linkedIn"></i>
          </span>
        </a>
      </div>
      <span className="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div className="nav-right nav-menu">
        <a className="nav-item" href='# '>
          Home
        </a>
        <a className="nav-item" href='# '>
          Documentation
        </a>
        <a className="nav-item" href='# '>
          About
        </a>
      </div>
    </nav>
    )
}
