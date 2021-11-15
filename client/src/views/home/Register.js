import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import "../../styles/Home.scss";
import axios from "axios";

const baseURL = "http://localhost:3000";

class Register extends Component {
  state = {
    user: "",
    pass: "",
    pass2: "",
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

  handleOnChangeConfirmPassword = (event) => {
    this.setState({
      pass2: event.target.value,
    });
  };

  handleRegister = (e) => {
    if (!this.state.user || !this.state.pass || !this.state.pass2) {
      alert("Các trường không được bỏ trống!");
      return;
    }
    if (this.state.pass != this.state.pass2) {
      alert("Mật khẩu 1 và mật khẩu 2 phải giống nhau!");
      return;
    }
    axios({
      method: "post",
      url: baseURL + "/register",
      data: {
        username: this.state.user,
        password: this.state.pass,
      },
    }).then((res) => {
      if (res.data.status === 1) {
        alert("Register success!");
        setTimeout(() => {
          this.props.history.push("/login");
        }, 0);
      } else {
        alert("Error register!");
      }
    });
  };

  render() {
    return (
      <div className="background">
        <div className="container">
          <Link to="/">
            <button> X </button>
          </Link>
          <div className="button-group">
            <div id="switch-register"></div>
            <Link to="/login">
              <button className="toggle-btn">Login</button>
            </Link>
            <button className="toggle-btn">Register</button>
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
                onChange={(event) => this.handleOnChangePassword(event)}
              />
            </div>
            <div>
              <input
                id="pass2"
                type="password"
                placeholder="Confirm Password"
                value={this.state.pass2}
                onChange={(event) => this.handleOnChangeConfirmPassword(event)}
              />
            </div>
            <div>
              <button
                className="btn-register"
                onClick={(e) => this.handleRegister(e)}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Register);
