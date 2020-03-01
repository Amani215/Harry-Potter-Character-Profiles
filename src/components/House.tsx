import React, { Component } from "react";

//import the style
import "../App.css";

//define type character
type character = {
  id: string;
  name: string;
  house: string;
  patronus: string;
  species: string;
  bloodStatus: string;
  role: string;
  school: string;
  deathEater: boolean;
  dumbledoresArmy: boolean;
  orderOfThePhoenix: boolean;
  ministryOfMagic: boolean;
  alias: string;
  wand: string;
  boggart: string;
  animagus: string;
};

//defining the proptypes
type P = {
  list: Array<character>;
  house: string;
  logo: string;
  clicked: Function;
};

export default class House extends Component<P> {
  state = {
    char: {}
  };

  render() {
    return (
      <div>
        <div>
          <div className="column">
            {/* the house logo (given in the props) */}
            <img src={this.props.logo} className="houseLogo" alt="" />

            <hr />

            <nav className="panel">
              {/* show all characters from the house list (given in the props) */}
              {this.props.list.map((elem, index) => (
                <div
                  key={index}
                  className="panel-block is-button"
                  //when a name is clicked
                  onClick={() => {
                    //set the state to the clicked character
                    this.setState({ char: elem });

                    //call the function clicked(given in the props) for that character
                    this.props.clicked(elem);
                  }}
                >
                  {/* show the name of the iterated character */}
                  {elem.name}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
