import React, { Component } from "react";
import "../styles/selectPlant.scss";
import sapling from "../assets/images/sapling.svg";
import mama from "../assets/images/mama.png";

export default class SelectPlant extends Component {
  handleSelectPLant(id) {}

  render() {
    let { arrPlantsInInventory } = this.props;
    return (
      <div className="table-select-plant">
        <h1>Select a plant:</h1>
        <div id="plants">
          {arrPlantsInInventory.map((item, index) => {
            return (
              <>
                <img
                  src={item.img}
                  alt=""
                  onClick={() => this.handleSelectPLant(item.name)}
                  className="plant-img"
                />
                <span>X {item.amount}</span>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}
