import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router";
import "../../styles/Home.scss";

const baseURL = "http://localhost:3000";

const userData = {username: '', data: ''};

class Login extends Component {
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

  handleLogin = (e) => {
    if (!this.state.user || !this.state.pass) {
      alert("missing params");
      return;
    }
    axios({
      method: "post",
      url: baseURL + "/login",
      data: {
        username: this.state.user,
        password: this.state.pass,
      },
    })
      .then((res) => {
        if (res.data.status === 1) {
          alert("Login success!");
          userData.username = this.state.user;
          setTimeout(() => {
            this.props.history.push("/farm");
          }, 0);
        } else {
          alert("Login error!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // e.preventDefault();
  };

  render() {
    return (
      <div className="background">
        <div className="container">
          <Link to="/">
            <button> X </button>
          </Link>
          <div className="button-group">
            <div id="switch-login"></div>
            <button className="toggle-btn">Login</button>
            <Link to="/register">
              <button className="toggle-btn">Register</button>
            </Link>
          </div>
          <div className="form">
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
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
export {userData};
