import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/Home.scss";

export default class Login extends Component {
  state = {
    user: "",
    pass: "",
    errMessage: "",
  };

  handleOnChangeUsername = (event) => {
    this.setState({
      user: event.target.value,
    });
  };

  handleOnChangePassword = (event) => {
    this.setState({
      pass: event.target.value,
    });
  };

  handleLogin = (event) => {
    event.preventDefault();
    if (!this.state.user || !this.state.pass) {
      alert("missing params");
      return;
    }

    this.setState({
      user: "",
      pass: "",
    });
  };

  render() {
    return (
      <div className="background">
        <div className="container">
          <div className="button-group">
            <div id="switch-login"></div>
            <button className="toggle-btn">Login</button>
            <Link to="/register">
              <button className="toggle-btn">Register</button>
            </Link>
          </div>
          <form>
            <div>
              <input
                id="user"
                type="text"
                placeholder="Username"
                value={this.state.user}
                onChange={(event) => this.handleOnChangeUsername(event)}
              />
            </div>
            <div>
              <input
                id="pass"
                type="password"
                placeholder="Password"
                value={this.state.pass}
                onChange={(e) => this.handleOnChangePassword(e)}
              />
            </div>
            <div style={{ color: "red" }}>{this.state.errMessage}</div>
            <div>
              <button className="btn-login" onClick={() => this.handleLogin()}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
