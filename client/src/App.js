// import the componets and pages that I need to use
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./componets/Nav";
import Saved from "./pages/SavedBooks";
import Search from "./pages/Search";
import Title from "./componets/Title";
import NoMatch from "./pages/NoMatch";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
       Hello World 
      </div>
    );
  }
}

export default App;
