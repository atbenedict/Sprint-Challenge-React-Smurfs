import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res.data);
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <nav>
          <h1 className="nav-header">Smurf Village</h1>
          <div className="nav-links">
            <NavLink to="/smurf-form">Add Smurf</NavLink>
            <NavLink exact to="/">
              Village
            </NavLink>
          </div>
        </nav>
        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        <Route
          path="/smurf-form"
          render={props => <SmurfForm {...props} smurfs={this.state.smurfs} />}
        />
      </div>
    );
  }
}

export default App;
