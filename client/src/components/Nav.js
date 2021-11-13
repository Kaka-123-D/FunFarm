import React, { Component } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "../styles/Nav.scss";
import { withRouter } from "react-router";
import iconFarm from "../assets/images/icon-farm.svg";
import iconMarket from "../assets/images/icon-marketplace.svg";
import logo from "../assets/images/logo.png";
import axios from "axios";
import { userData } from "../views/home/Login";
const baseURL = "http://localhost:3000";

class Nav extends Component {
  handleLogout = () => {
    axios({
      method: "post",
      url: baseURL + "/logout",
      data: {
        username: userData.username,
      },
    }).then((res) => {
      if (res.data.status === 1) {
        setTimeout(() => {
          this.props.history.push("/");
        }, 2000);
      }
    });
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

          <button id="log-out" onClick={() => this.handleLogout()}>
            Log out
          </button>
        </Router>
      </div>
    );
  }
}
export default withRouter(Nav);