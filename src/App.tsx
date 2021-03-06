import React from "react";
import axios from "axios";

//Components
import Header from "./components/Header";
import Search from "./components/Search";
import Houses from "./components/Houses";
import Profile from "./components/Profile";
import About from "./components/About";
import Contact from "./components/Contact";

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
    currentPage: "Home",
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
  search = async (searchedText: string) => {
    if (searchedText === "") this.setState({ searched: false });
    else {
      this.setState({ searched: true });
      await this.setState({ keyword: searchedText });
      let newarray = this.state.fullList.filter(this.stringExistsInside);
      this.setState({ searchedArray: newarray });
    }
  };

  showPage = async (clickedPage: string) => {
    await this.setState({ searched: false, searchedArray: [] });
    await this.setState({ currentPage: clickedPage });
  };

  //function to show the profile when a character is clicked (called in the props of the house Component)
  clicked = (elem: character) => {
      let arrayOfElem = [elem];
      this.setState({ searched: true, searchedArray: arrayOfElem });
  };

  //to show the lists again
  back = () => {
    this.setState({ searched: false, searchedArray: [] });
  };

  render() {
    //if there's something typed in the search bar show the profiles of the corresponding characters (from the searchedArray in the state)
    if (this.state.currentPage === "Home") {
      if (this.state.searched)
        return (
          <div className="body">
            <Header showPage={this.showPage} />
            <Search search={this.search} />
            {this.state.searchedArray.map((elem: character, index: number) => (
              <Profile key={index} characterProfile={elem} />
            ))}
            <button
              className="back-button button is-primary"
              onClick={this.back}
            >
              Back
            </button>
          </div>
        );
      //if there's nothing typed in the search bar show the lists
      else
        return (
          <div className="body">
            <Header showPage={this.showPage} />
            <Search search={this.search} />
            <Houses
              gryffin={this.state.gryffin}
              huff={this.state.huff}
              raven={this.state.raven}
              slyth={this.state.slyth}
              clicked={this.clicked}
            />
          </div>
        );
    } else if (this.state.currentPage === "About")
      return (
        <div className="body">
          <Header showPage={this.showPage} />
          <About />
        </div>
      );
    else
      return (
        <div className="body">
          <Header showPage={this.showPage} />
          <Contact />
        </div>
      );
  }
}

export default App;
