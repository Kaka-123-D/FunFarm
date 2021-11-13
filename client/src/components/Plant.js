import React, { Component } from "react";
import sapling from "../assets/images/sapling.svg"
import "../styles/PLant.scss"
export default class Plant extends Component {
  render() {
    return (
      <div className="card">
            <img src={sapling} alt=""></img>
      </div>
    );
  }
}
