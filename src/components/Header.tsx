import React, { Component } from "react";

//import the logo of the web App
import logo from "./pics/Logo.png";

export default class Header extends Component<{ showPage: Function }> {
  state = {
    home: "Home",
    about: "About",
    contact: "Contact"
  };

  onClick = (e: any) => {
    //send the written content to the search function in App.tsx
    this.props.showPage(e.target.id);
  };

  render() {
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
            {/* <a className="nav-item" href="https://github.com/Amani215">
              <span className="icon">
                <i className="fa fa-github"></i>
              </span>
            </a> */}
          </div>
        </div>

        {/* Menu */}
        <div className="nav-right ">
          <a
            className="nav-item"
            href="# "
            onClick={this.onClick}
            id={this.state.home}
          >
            Home
          </a>
          <a
            className="nav-item"
            href="# "
            onClick={this.onClick}
            id={this.state.about}
          >
            About
          </a>
          <a
            className="nav-item"
            href="# "
            onClick={this.onClick}
            id={this.state.contact}
          >
            Contact
          </a>
        </div>
      </nav>
    );
  }
}
