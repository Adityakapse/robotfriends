import React, { Component } from "react";
import "tachyons";
import Cardmap from "../components/Cardmap";
import SearchInput from "../components/SearchInput";
import "./App.css";
import Scroll from "../components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: " ",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Robots</h1>
        <SearchInput searchChange={this.onSearchChange} />
        <Scroll>
          <Cardmap robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
