// import the componets and pages that I need to use
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Saved from "./pages/SavedBooks";
import Search from "./pages/Search";
import Title from "./components/Title";
import NoMatch from "./pages/NoMatch";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className= "container.fluid">
          <Nav />
          <Title />
          <Switch>
            <Route exact path="/" component={Saved} />
            <Route exact path="/books" component={Saved} />
            <Route exact path="/search" component={Search} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
      // <div className="App">
      //  Hello World 
      // </div>
    );
  }
}

export default App;
