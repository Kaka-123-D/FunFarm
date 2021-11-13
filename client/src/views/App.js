import React from "react";
import Login from "./home/Login";
import Register from "./home/Register";
import Home from "./home/Home";
import Farm from "./farm/Farm";
import Marketplace from "./marketplace/Marketplace"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/farm">
            <Farm/>
          </Route>
          <Route path="/marketplace">
            <Marketplace />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
