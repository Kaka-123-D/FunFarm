import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/Home.scss";
import axios from 'axios';

const baseURL = 'http://localhost:3000';

export default class Register extends Component {
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

  // handleRegister = (event) => {
  //   event.preventDefault();
  //   if (!this.state.user || !this.state.pass || !this.state.pass2) {
  //     alert("missing params");
  //     return;
  //   }

  //   this.setState({
  //     user: "",
  //     pass: "",
  //     pass2: "",
  //   });
  // };

  handleRegister = (e) => {
    axios({
      method: "post",
      url: baseURL + "/register",
      data: {
        username: this.state.user,
        password: this.state.pass,
      },
    }).then(res => {
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })
      e.preventDefault();
      console.log(this.state);
    
  }

  render() {
    return (
      <div className="background">
        <div className="container">
          <div className="button-group">
            <div id="switch-register"></div>
            <Link to="/login">
              <button className="toggle-btn">Login</button>
            </Link>
            <button className="toggle-btn">Register</button>
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
          </form>
        </div>
      </div>
    );
  }
}
