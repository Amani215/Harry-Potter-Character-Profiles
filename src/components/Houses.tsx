import React, { Component } from "react";

//importing the house items
import House from "./House";

import gryffinIMG from "./pics/Gryffindor.png";
import huffIMG from "./pics/Hufflepuff.png";
import ravenIMG from "./pics/Ravenclaw.png";
import slythIMG from "./pics/Slytherin.png";

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

type proptypes = {
  gryffin: Array<character>;
  huff: Array<character>;
  raven: Array<character>;
  slyth: Array<character>;
};

export default class Houses extends Component<proptypes> {
  render() {
    return (
      <div>
        <div className="container">
          <House key="gryffindor" list={this.props.gryffin} house="Gryffindor" logo={gryffinIMG}/>
          <House key="hufflepuff" list={this.props.huff} house="Hufflepuff" logo={huffIMG} />
          <House key="ravenclaw" list={this.props.raven} house="Ravenclaw" logo={ravenIMG} />
          <House key="slytherin" list={this.props.slyth} house="Slytherin" logo={slythIMG} />
        </div>
      </div>
    );
  }
}
