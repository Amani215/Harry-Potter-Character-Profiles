import React, { Component } from "react";

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
  clicked: Function;
};

export default class Houses extends Component<proptypes> {
  render() {
      return (
        <div>
          <div className="containerHouseLists">
            <House
              key="gryffindor"
              list={this.props.gryffin}
              house="Gryffindor"
              logo={gryffinIMG}
              clicked={this.props.clicked}
            />
            <House
              key="hufflepuff"
              list={this.props.huff}
              house="Hufflepuff"
              logo={huffIMG}
              clicked={this.props.clicked}
            />
            <House
              key="ravenclaw"
              list={this.props.raven}
              house="Ravenclaw"
              logo={ravenIMG}
              clicked={this.props.clicked}
            />
            <House
              key="slytherin"
              list={this.props.slyth}
              house="Slytherin"
              logo={slythIMG}
              clicked={this.props.clicked}
            />
          </div>
        </div>
      );
  }
}
