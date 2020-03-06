import React from "react";

export default function About() {
    return (
      <div className="center-div">
        <hr />
        <div className="margin-top">
          This web app is for the potterheads who want to get a list of all the
          characters in the Harry Potter saga. It shows the house, the blood
          status and several other characteristics of the character. This app is
          built in TypeScript using React.
          <br />
          The data concerning the characters is from the Harry Potter API.
          <br />
          <br />
          Thank you for visiting this web application.
          <br />
          <br />
          <span className="icon">
            <i className="fa fa-bolt"></i>
          </span>
        </div>
      </div>
    );
  }
