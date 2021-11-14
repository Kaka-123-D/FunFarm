import React, { Component } from "react";
// import update from 'react-addons-update';
import "../styles/SidebarItem.scss";
// import smallPot from "../assets/images/smallPot.png";
// import bigPot from "../assets/images/bigPot.png";
// import water from "../assets/images/water.png";
// import scarecrow from "../assets/images/scarecrow.png";
// import greenhouse from "../assets/images/greenhouse.png";
import shop from "../assets/images/shop.png";
import farm from "../assets/images/farm.png";
import { Link } from "react-router-dom";

export default class SidebarItem extends Component {
  // state = {
  //   openShop: false,
  //   reload: false,
  //   arrItems: [
  //     { type: 1, amount: 0, img: smallPot },
  //     { type: 2, amount: 0, img: bigPot },
  //     { type: 3, amount: 0, img: water },
  //     { type: 4, amount: 0, img: scarecrow },
  //     { type: 5, amount: 0, img: greenhouse },
  //   ],
  // };

  // handleUseItem = (type) => {
  //   this.state.arrItems[type - 1].amount -= 1;
  // }

  // handleOpenShop = () => {
  //   this.setState({
  //     openShop: !this.state.openShop,
  //   })
  // }

  render() {
    let { arrItems, openShop, handleUseItem } = this.props;
    return (
      <div className="sidebar">
        <div className="ribbon-wrapper">
          <h1 className="ribbon"> Items </h1>
        </div>

        {arrItems.map((item) => {
          return (
            <div key={item.type} className="item-group">
              <img src={item.img} alt="" className="item" />
              <button
                className="use-btn"
                onClick={() => handleUseItem(item.type)}
              >
                Use
              </button>
              <span className="amount-item">{item.amount}</span>
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
