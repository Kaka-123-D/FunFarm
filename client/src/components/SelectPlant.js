import React, { Component } from "react";
import "../styles/selectPlant.scss";
import Sapling from "../assets/images/sapling.svg";
import rootTree from "../assets/images/rootTree.png";

export default class SelectPlant extends Component {
  state = {
    plants: [
      { id: 0, name: "sapling", img: Sapling },
      { id: 0, name: "sapling", img: Sapling },
      { id: 0, name: "sapling", img: Sapling },
      { id: 0, name: "sapling", img: Sapling },
      { id: 0, name: "sapling", img: Sapling },
      { id: 0, name: "sapling", img: Sapling },
      { id: 0, name: "sapling", img: Sapling },
      { id: 0, name: "sapling", img: Sapling },
      { id: 1, name: "root tree", img: rootTree },
    ],
    tools: [{ type: 0, name: "small pot" }],
  };

  handleSelectPLant(id) {}

  render() {
    return (
      <div className="table-select-plant">
        <h1>Select a plant:</h1>
        <div id="plants">
          {this.state.plants.map((item, index) => {
            return (
              <img
                src={item.img}
                alt=""
                onClick={() => this.handleSelectPLant(item.id)}
                className="plant-img"
              />
            );
          })}
        </div>
      </div>
    );
  }
}
