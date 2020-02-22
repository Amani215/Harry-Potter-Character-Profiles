import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Houses from "./components/Houses";
import Profile from "./components/Profile";
import axios from "axios";

import "./App.css";

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

const key = "$2a$10$eGkdptUndJyrJ5F6Nj4dqeb6jkh0w7uW6epilhov6PxMUrHLa8R8a";
class App extends React.Component {
  state = {
    fullList: [],
    gryffin: [],
    huff: [],
    raven: [],
    slyth: [],
    keyword: "",
    searched: false,
    searchedArray: []
  };

  //sorting the characters from the api
  componentDidMount() {
    let gryffin: Array<character> = [];
    let huff: Array<character> = [];
    let raven: Array<character> = [];
    let slyth: Array<character> = [];
    let fullList: Array<character> = [];
    axios
      .get(`https://www.potterapi.com/v1/characters?key=${key}`)
      .then(res => {
        res.data.forEach((elem: character) => {
          fullList.push(elem);
          switch (elem.house) {
            case "Gryffindor":
              gryffin.push(elem);
              break;
            case "Hufflepuff":
              huff.push(elem);
              break;
            case "Ravenclaw":
              raven.push(elem);
              break;
            case "Slytherin":
              slyth.push(elem);
              break;
          }
        });
        this.setState({
          huff: huff,
          raven: raven,
          gryffin: gryffin,
          slyth: slyth,
          fullList: fullList
        });
      });
  }

  equalStrings = (elem: character) => {
    return elem.name === this.state.keyword;
  };

  stringExistsInside = (elem: character) => {
    let s: string = "";
    const keyword: string = this.state.keyword;
    const name: string = elem.name;

    for (let j: number = 0; j < name.length; j++) {
      s = name.slice(j, j + keyword.length);
      if (s.toUpperCase() === keyword.toUpperCase()) return true;
      else s = "";
    }
    return false;
  };

  search = async (title: string) => {
    if (title === "") this.setState({ searched: false });
    else {
      this.setState({ searched: true });
      await this.setState({ keyword: title });
      let newarray = this.state.fullList.filter(this.stringExistsInside);
      this.setState({ searchedArray: newarray });
    }
  };

  render() {
    if (this.state.searched === false)
      return (
        <div className="App">
          <Header />
          <Search search={this.search} />
          <Houses
            gryffin={this.state.gryffin}
            huff={this.state.huff}
            raven={this.state.raven}
            slyth={this.state.slyth}
          />
        </div>
      );
    else
      return (
        <div className="App">
          <Header />
          <Search search={this.search} />
          {this.state.searchedArray.map((elem: character, index:number) => (
            <Profile key={index} characterProfile={elem} />
          ))}
        </div>
      );
  }
}

export default App;
