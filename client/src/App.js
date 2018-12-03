import React, { Component } from "react";
import Routes from "./routes";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
        <div>
          <Link to="/register">Register</Link>
          <br />
          <Link to="/">Index</Link>
        </div>
      </div>
    );
  }
}

export default App;
