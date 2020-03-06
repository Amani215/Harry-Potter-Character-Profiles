import React, { Component } from "react";

export default class Search extends Component<{ search: Function }> {
  state = {
    searchedText: ""
  };

  onChange = (e: any) => {
    //set the state to the written content
    this.setState({ searchedText: e.target.value });

    //send the written content to the search function in App.tsx
    this.props.search(e.target.value);
  };

  render() {
    return (
      <div>
        <div className="field panel-block searchForm">
          {/* search box */}
          <div className="control has-icon">
            <input
              className="input searchBox"
              type="text"
              placeholder="Find a character"
              value={this.state.searchedText}
              //whenever there's something written call function onChange
              onChange={this.onChange}
            />
          </div>

          {/* search button */}
          <button className="button is-primary">Search</button>
        </div>
      </div>
    );
  }
}
