import React from "react";
import Login from "./home/Login";
import Register from "./home/Register";
import Home from "./home/Home";
import Farm from "./farm/Farm";
import Marketplace from "./marketplace/Marketplace";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    username: "",
  };

  handleLoginOnUsername = (username) => {
    this.setState({ username: username });
    console.log("username: " + username);
  };
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/login">
              <Login handleLoginOnUsername={this.handleLoginOnUsername} />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/farm">
              <Farm username={this.state.username} />
            </Route>
            <Route path="/farm/shop">
              <Farm />
            </Route>
            <Route path="/marketplace">
              <Marketplace />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
