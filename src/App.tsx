import React from "react";
import axios from "axios";

//Components
import Header from "./components/Header";
import Search from "./components/Search";
import Houses from "./components/Houses";
import Profile from "./components/Profile";

//style
import "./App.css";

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

//API key
const key = "$2a$10$eGkdptUndJyrJ5F6Nj4dqeb6jkh0w7uW6epilhov6PxMUrHLa8R8a";

class App extends React.Component {
  state = {
    fullList: [], //essential for the Search component
    gryffin: [], //Gryffindor list
    huff: [], //Hufflepuff
    raven: [], //Ravenclaw
    slyth: [], //Slytherin
    keyword: "", //Typed text in the search bar
    searched: false, //to control what the page is showing (lists or profiles)
    searchedArray: [] //result of the search
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
          //put the character in the full list
          fullList.push(elem);

          //put the character in his/her corresponding house list
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
        //set the lists in the state
        this.setState({
          huff: huff,
          raven: raven,
          gryffin: gryffin,
          slyth: slyth,
          fullList: fullList
        });
      });
  }

  //returns true if the typed word in the search bar exists in the name of the character
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

  //returns a list of the characters who have the typed word in the search bar in their names
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
    //if there's nothing typed in the search bar show the lists
    if (this.state.searched === false)
      return (
        <div className="body">
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
    //if there's something typed in the search bar show the profiles of the corresponding characters (from the searchedArray in the state)
    else
      return (
        <div className="body">
          <Header />
          <Search search={this.search} />
          {this.state.searchedArray.map((elem: character, index: number) => (
            <Profile key={index} characterProfile={elem} />
          ))}
        </div>
      );
  }
}

export default App;
