import React, { Component } from "react";
import "../../styles/shopTool.scss";
import smallPot from "../../assets/images/smallPot.png";
import bigPot from "../../assets/images/bigPot.png";
import water from "../../assets/images/water.png";
import scarecrow from "../../assets/images/scarecrow.png";
import greenhouse from "../../assets/images/greenhouse.png";
import sapling from "../../assets/images/sapling.svg";
import mama from "../../assets/images/mama.png";

export default class ShopTool extends Component {
  render() {
    let { moneyAmount, handleBuyItem ,handleBuyPLant} = this.props;
    return (
      <div className="shop">
        <div id="info-shop">
          <button className="amount-money">{moneyAmount}</button>
        </div>
        <div id="body-shop">
          <div id="small-pot-tool" className="item-card">
            <img src={smallPot} alt="" />
            <h2>Small Pot</h2>
            <button onClick={() => handleBuyItem(0)} className="buy-btn">
              25 LE
            </button>
          </div>
          <div id="big-pot-tool" className="item-card">
            <img src={bigPot} alt="" />
            <h2>Big Pot</h2>
            <button onClick={() => handleBuyItem(1)} className="buy-btn">
              75 LE
            </button>
          </div>
          <div id="water-tool" className="item-card">
            <img src={water} alt="" />
            <h2>Water</h2>
            <button onClick={() => handleBuyItem(2)} className="buy-btn">
              50 LE
            </button>
          </div>
          <div id="scarecrow-tool" className="item-card">
            <img src={scarecrow} alt="" />
            <h2>Scarecrow</h2>
            <button onClick={() => handleBuyItem(3)} className="buy-btn">
              20 LE
            </button>
          </div>
          <div id="greenhouse" className="item-card">
            <img src={greenhouse} alt="" />
            <h2>G.House</h2>
            <button onClick={() => handleBuyItem(4)} className="buy-btn">
              10 LE
            </button>
          </div>
          <div id="sapling" className="item-card">
            <img src={sapling} alt="" />
            <h2>Sapling</h2>
            <button onClick={() => handleBuyPLant(0)} className="buy-btn">
              50 LE
            </button>
          </div>
          <div id="mama" className="item-card">
            <img src={mama} alt="" />
            <h2>Root tree</h2>
            <button onClick={() => handleBuyPLant(1)} className="buy-btn">
              75 LE
            </button>
          </div>
        </div>
      </div>
    );
  }
}
