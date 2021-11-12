import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
          <div className="topnav">
            <NavLink className="active" href="#home">
              Home
            </NavLink>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
        );
    }
}
