import React from "react";

//import the logo of the web App
import logo from "./pics/Logo.png";

export default function Header() {
  return (
    <nav className="nav">
      <div className="logos">
        {/* app logo */}
        <div className="nav-left">
          <a className="nav-item" href="# ">
            <img src={logo} alt="" />
          </a>
        </div>

        {/* Contact logos (like github and linkedIn) */}
        <div className="contactLogos">
          <a className="nav-item" href="https://github.com/Amani215">
            <span className="icon">
              <i className="fa fa-github"></i>
            </span>
          </a>
        </div>
      </div>

      {/* Menu */}
      <div className="nav-right ">
        <a className="nav-item" href="./App">
          Home
        </a>
        <a className="nav-item" href="# ">
          About
        </a>
        <a className="nav-item" href="# ">
          Contact
        </a>
      </div>
    </nav>
  );
}
