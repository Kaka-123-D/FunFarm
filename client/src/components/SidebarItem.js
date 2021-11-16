import React, { Component } from "react";
// import update from 'react-addons-update';
import "../styles/SidebarItem.scss";
import smallPot from "../assets/images/smallPot.png";
import bigPot from "../assets/images/bigPot.png";
import water from "../assets/images/water.png";
import scarecrow from "../assets/images/scarecrow.png";
import greenhouse from "../assets/images/greenhouse.png";
import sapling from "../assets/images/sapling.svg";
import mama from "../assets/images/mama.svg";
import shop from "../assets/images/shop.png";
import farm from "../assets/images/farm.png";
import { Link } from "react-router-dom";

export default class SidebarItem extends Component {
  state = {
    arrImg: [
      {img: smallPot},
      {img: bigPot},
      {img: water},
      {img: scarecrow},
      {img: greenhouse},
    ],

  };

  render() {
    let { arrItems, openShop, handleUseItem, dataUser} = this.props;
    return (
      <div className="sidebar">
        <div className="ribbon-wrapper">
          <h1 className="ribbon"> Items </h1>
        </div>

        {dataUser.body.inventory.tools.map((item, index) => {
          return (
            <div key={index} className="item-group">
              <img src={this.state.arrImg[index].img} alt="" className="item" />
              <button
                className="use-btn"
                onClick={() => handleUseItem(index)}
              >
                Use
              </button>
              <span className="amount-item">{item}</span>
            </div>
          );
        })}

        <Link to={openShop === false ? "/farm/shop" : "/farm"}>
          <img
            src={openShop === false ? shop : farm}
            alt="shop"
            id="shop"
          />
        </Link>
      </div>
    );
  }
}
