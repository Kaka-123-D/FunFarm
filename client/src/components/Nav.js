import React, { Component } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "../styles/Nav.scss";
import iconFarm from "../assets/images/icon-farm.svg";
import iconMarket from "../assets/images/icon-marketplace.svg";
import logo from "../assets/images/logo.png";
import axios from "axios";
const baseURL = "http://localhost:3000/";
export default class Nav extends Component {
  handleLogout = () => {
    axios({
      method: "get",
      url: baseURL + "/logout",
      data: {},
    })
      .then((res) => {
        if (res.data.status === 1) {
          this.props.history.push("/");
        }
      })
  };

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
            <button onClick={() => this.handleLogout()}>Log out</button>
          </a>
        </Router>
      </div>
    );
  }
}
