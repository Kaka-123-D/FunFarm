import React, { Component } from "react";
import "../styles/selectPlant.scss";
import sapling from "../assets/images/sapling.svg";
import mama from "../assets/images/mama.png";

export default class SelectPlant extends Component {
  state = {
    arrImg: [
      { name: "sapling", img: sapling },
      { name: "mama", img: mama },
    ],
  };

  render() {
    let { arrPlantsInInventory, dataUser, handleSelectPLant} = this.props;
    return (
      <div className="table-select-plant">
        <h1>Select a plant:</h1>
        <div id="plants">
          {dataUser.body.inventory.plants.map((item, index) => {
            return (
              <>
                {item > 0 ? (
                  <>
                    <img
                      src={this.state.arrImg[index].img}
                      alt=""
                      onClick={() =>
                        handleSelectPLant(index)
                      }
                      className="plant-img"
                    />
                    <span>X {item}</span>{" "}
                  </>
                ) : (
                  <></>
                )}
              </>
            );
          })}
        </div>
      </div>
    );
  }
}
