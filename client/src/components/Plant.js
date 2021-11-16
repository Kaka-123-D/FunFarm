import React, { Component } from "react";
import sapling from "../assets/images/sapling.svg";
import mama from "../assets/images/mama.png";
import noWaterLand from "../assets/images/noWaterLand.svg";
import haveWaterLand from "../assets/images/haveWaterLand.svg";
import "../styles/PLant.scss";
export default class Plant extends Component {
  state = {
    arrImg: [
      {img: sapling},
      {img: mama}
    ]
  }
  render() {
    return (
      <div className="card">
        <img src={noWaterLand} alt="no water land" className="landFarming" />
        <img src={this.state.arrImg[this.props.type].img} alt="plant" className="plantFarming"></img>
      </div>
    );
  }
}
