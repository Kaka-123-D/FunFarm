import React, { Component } from "react";
import "../styles/SidebarItem.scss";
import smallPot from "../assets/images/smallPot.png";
import bigPot from "../assets/images/bigPot.png";
import water from "../assets/images/water.png";
import scarecrow from "../assets/images/scarecrow.png";
import greenhouse from "../assets/images/greenhouse.png";
import shop from "../assets/images/shop.png"


export default class SidebarItem extends Component {
  state = { 
    arrItems: [
      { type: 1, amount: 0, img: smallPot },
      { type: 2, amount: 0, img: bigPot },
      { type: 3, amount: 0, img: water },
      { type: 4, amount: 0, img: scarecrow },
      { type: 5, amount: 0, img: greenhouse },
    ],
  };

  handleUseItem = () => {};

  render() {
    return (
      <div className="sidebar">
        <div className="ribbon-wrapper">
          <h1 className="ribbon"> Items </h1>
        </div>

        {this.state.arrItems.map((item) => {
          return (
            <div key={item.type} className="item-group">
              <img src={item.img} alt="" className="item" />
              <button className="use-btn" onClick={() => this.handleUseItem()}>
                Use
              </button>
              <span className="amount-item">{item.amount}</span>
            </div>
          );
        })}

        <a href="/farm/shop"><img src={shop} alt="shop" id="shop"/></a>
      </div>
    );
  }
}
