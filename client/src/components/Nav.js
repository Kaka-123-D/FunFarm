import React, { Component } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "../styles/Nav.scss";
import iconFarm from "../assets/images/icon-farm.svg";
import iconMarket from "../assets/images/icon-marketplace.svg";
import logo from "../assets/images/logo.png";
export default class Nav extends Component {
  render() {
    return (
      <div className="topnav">
        <Router>
          <a href="/">
            <img src={logo} alt="logo" className="logo" />
          </a>
          <NavLink activeClassName="active" to="/marketplace">
            <img src={iconMarket} alt="icon-market" className="icon" />
            &nbsp;Marketplace
          </NavLink>
          <NavLink activeClassName="active" to="/farm">
            <img src={iconFarm} alt="icon-farm" className="icon" />
            &nbsp;Farm
          </NavLink>
          <a id="log-out" href="/">
            Log out
          </a>
        </Router>
      </div>
    );
  }
}
