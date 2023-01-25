import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    this.setState(() => {
      return { searchField: event.target.value.toLowerCase() };
    });
  };

  render() {
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={this.onSearchChange}
        />
        {this.state.monsters
          .filter((monster) => monster.name.toLowerCase().includes(this.state.searchField))
          .map((monster) => (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          ))}
      </div>
    );
  }
}

export default App;
