import React, { Component } from "react";

//import the profile component
import Profile from "./Profile";

//empty variable of character type
import emptyChar from "./emptyChar";

//import each house list of characters
import House from "./House";

//houses logos
import gryffinIMG from "./pics/Gryffindor.png";
import huffIMG from "./pics/Hufflepuff.png";
import ravenIMG from "./pics/Ravenclaw.png";
import slythIMG from "./pics/Slytherin.png";

//define the character type
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

//define the proptypes
type proptypes = {
  gryffin: Array<character>;
  huff: Array<character>;
  raven: Array<character>;
  slyth: Array<character>;
};

//define the state types
interface statetypes {
  char: character;
}

export default class Houses extends Component<proptypes, statetypes> {
  state = {
    char: emptyChar //necessary to get the clicked character to pass it in the props of the Profile component
  };

  //function to show the profile when a character is clicked (called in the props of the house Component)
  clicked = (elem: character) => {
    //if the character is not an empty character
    if (elem.id !== "empty") {
      //pass the clicked character to the state
      this.setState({ char: elem });
    }
  };

  //to show the lists again
  back = () => {
    this.setState({ char: emptyChar });
  };

  render() {
    //if there's no clicked character show the lists
    if (this.state.char.id === "empty") {
      return (
        <div>
          <div className="containerHouseLists">
            <House
              key="gryffindor"
              list={this.props.gryffin}
              house="Gryffindor"
              logo={gryffinIMG}
              clicked={this.clicked}
            />
            <House
              key="hufflepuff"
              list={this.props.huff}
              house="Hufflepuff"
              logo={huffIMG}
              clicked={this.clicked}
            />
            <House
              key="ravenclaw"
              list={this.props.raven}
              house="Ravenclaw"
              logo={ravenIMG}
              clicked={this.clicked}
            />
            <House
              key="slytherin"
              list={this.props.slyth}
              house="Slytherin"
              logo={slythIMG}
              clicked={this.clicked}
            />
          </div>
        </div>
      );
    } else {
      //if there's a clicked character (so it's not empty) show the Profile component of that character
      return (
        <div>
          <Profile characterProfile={this.state.char} />
          {/* button to show the lists again */}
          <button className="back-button button is-primary" onClick={this.back}>
            Back
          </button>
        </div>
      );
    }
  }
}
