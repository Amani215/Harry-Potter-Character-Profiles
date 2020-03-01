import React, { Component } from "react";

//houses logos
import gryffinIMG from "./pics/Gryffindor.png";
import huffIMG from "./pics/Hufflepuff.png";
import ravenIMG from "./pics/Ravenclaw.png";
import slythIMG from "./pics/Slytherin.png";

//"no house" logo
import sortedIMG from "./pics/sorted.jpg";

//define the type character
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

export default class Profile extends Component<{
  characterProfile: character;
}> {
  //returns the logo corresponding to the house of the character passed in the props
  IMGResult = () => {
    let result;
    switch (this.props.characterProfile.house) {
      case "Gryffindor":
        result = gryffinIMG;
        break;
      case "Hufflepuff":
        result = huffIMG;
        break;
      case "Ravenclaw":
        result = ravenIMG;
        break;
      case "Slytherin":
        result = slythIMG;
        break;
      //if the house is unknown
      default:
        result = sortedIMG;
    }
    return result;
  };

  //if the passed character has an alias then add it to description
  ifAlias = (): string => {
    let result: string = " ";
    if (this.props.characterProfile.alias)
      result = " alias " + this.props.characterProfile.alias;
    return result;
  };

  render() {
    return (
      <div>
        <div className="profile">
          {/* House logo */}
          <div className="left">
            <img src={this.IMGResult()} className="profileHouse" alt="" />
          </div>

          {/* description */}
          <div className="right">
            <ul>
              <li>
                <strong>Name: </strong>
                {this.props.characterProfile.name}
                <i>{this.ifAlias()}</i> ({this.props.characterProfile.species})
              </li>
              <li>
                <strong>Blood Status: </strong>
                {this.props.characterProfile.bloodStatus}
              </li>
              <li>
                <strong>Role: </strong>
                {this.props.characterProfile.role}
              </li>
              <li>
                <strong>School: </strong>
                {this.props.characterProfile.school}
              </li>
              <li>
                <strong>Wand: </strong>
                {(() => {
                  if (this.props.characterProfile.wand)
                    return this.props.characterProfile.wand;
                  else return "unknown";
                })()}
              </li>
              <li>
                <strong>Patronus: </strong>
                {(() => {
                  if (this.props.characterProfile.patronus)
                    return this.props.characterProfile.patronus;
                  else return "unknown";
                })()}
              </li>
              <li>
                <strong>Boggart: </strong>
                {(() => {
                  if (this.props.characterProfile.boggart)
                    return this.props.characterProfile.boggart;
                  else return "unknown";
                })()}
              </li>
              <li>
                <strong>Animagus: </strong>
                {(() => {
                  if (this.props.characterProfile.animagus)
                    return this.props.characterProfile.animagus;
                  else return "No information";
                })()}
              </li>
              <li>
                <i>
                  {(() => {
                    if (this.props.characterProfile.deathEater)
                      return "DeathEater, ";
                  })()}
                </i>
                <i>
                  {(() => {
                    if (this.props.characterProfile.orderOfThePhoenix)
                      return "Member of The Order of the Phoenix, ";
                  })()}
                </i>
                <i>
                  {(() => {
                    if (this.props.characterProfile.dumbledoresArmy)
                      return "Member in Dumbledore's Army, ";
                  })()}
                </i>
                <i>
                  {(() => {
                    if (this.props.characterProfile.ministryOfMagic)
                      return "Works for the Minisitry of Magic. ";
                  })()}
                </i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
