import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/Home.scss";

export default class Home extends Component {
  render() {
    return (
      <div className="background">
        <div className="button-group">
          <Link to="/register">
            <button className="btn">Create Account</button>
            <br />
          </Link>
          <Link to="/login">
            <button className="btn">Login</button>
            <br />
          </Link>
          <Link to="/farm">
            <button className="btn">Farm</button>
            <br />
          </Link>
          <Link to="/about">
            <button className="btn">About Us</button>
          </Link>
        </div>
      </div>
    );
  }
}
