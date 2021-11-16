import React, { Component } from "react";
import darkType from "../../assets/images/darkType.svg";
import electricType from "../../assets/images/electricType.svg";
import fireType from "../../assets/images/fireType.svg";
import iceType from "../../assets/images/iceType.svg";
import lightType from "../../assets/images/lightType.svg";
import parasiteType from "../../assets/images/parasiteType.svg";
import metalType from "../../assets/images/metalType.svg";
import waterType from "../../assets/images/waterType.svg";
import windType from "../../assets/images/windType.svg";
import "../../styles/SearchTable.scss";

export default class SearchTable extends Component {
  render() {
    return (
      <div className="search-table">
        <div className="header-search-table">
          <p>Filter</p>
          <button className="clear-filter-btn">Clear filter</button>
        </div>
        <div className="body-search-table">
          <div className="search-type">
            <p>Type</p>
            <div className="row-type">
              <span>
                <img src={darkType} alt="dark" />
              </span>
              <span>
                <img src={electricType} alt="electric" />
              </span>
              <span>
                <img src={fireType} alt="fire" />
              </span>
            </div>
            <div className="row-type">
              <span>
                <img src={iceType} alt="ice" />
              </span>
              <span>
                <img src={lightType} alt="light" />
              </span>
              <span>
                <img src={parasiteType} alt="parasite" />
              </span>
            </div>
            <div className="row-type">
              <span>
                <img src={metalType} alt="metal" />
              </span>
              <span>
                <img src={waterType} alt="water" />
              </span>
              <span>
                <img src={windType} alt="wind" />
              </span>
            </div>
          </div>
          <div className="search-rarity">
            <p>Rarity</p>
            <div className="row-rarity">
              <button id="common-rarity-btn" className="rarity-btn">
                Common
              </button>
              <button id="uncommon-rarity-btn" className="rarity-btn">
                Uncommon
              </button>
            </div>
            <div className="row-rarity">
              <button id="rare-rarity-btn" className="rarity-btn">
                Rare
              </button>
              <button id="mythic-rarity-btn" className="rarity-btn">
                Mythic
              </button>
            </div>
          </div>
          <div className="search-id">
            <p>ID</p>
            <input placeholder="# insert ID here"></input>
            <button id="confirm-search-id">Confirm</button>
          </div>
        </div>
      </div>
    );
  }
}
