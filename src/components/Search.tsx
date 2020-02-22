import React, { Component } from "react";

export default class Search extends Component<{ search: Function }> {
  state = {
    title: ""
  };

  onChange = (e:any) => {
    this.setState({ title: e.target.value });
    this.props.search(e.target.value);
    // this.props.search(this.state.title)
  };

  render() {
    return (
      <div>
        <form>
          <nav className="panel">
            <div className="field panel-block searchForm">
              <div className="control has-icon">
                <input
                  className="input searchBox"
                  type="text"
                  placeholder="Find a character"
                  value={this.state.title}
                  onChange={this.onChange}
                />
              </div>
              <div className="control searchButtonDiv">
                <button className="button is-primary">Search</button>
              </div>
            </div>
          </nav>
        </form>
      </div>
    );
  }
}
