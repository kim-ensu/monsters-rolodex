import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "Dima", secondName: "Kim" },
      company: "ZTM",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.secondName}, I work at{" "}
            {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState(
                () => {
                  return { name: { firstName: "Andrei", secondName: "Hwan" } };
                },
                () => {
                  console.log(this.state);
                }
              );
            }}>
            Change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
