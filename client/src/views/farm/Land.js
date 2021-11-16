import React, { Component } from "react";
import "../../styles/Land.scss";
import Plant from "../../components/Plant";
import SelectPlant from "../../components/SelectPlant";
import sapling from "../../assets/images/sapling.svg";
import mama from "../../assets/images/mama.png";
import axios from "axios";

const baseURL = "http://localhost:3000";

export default class Land extends Component {
  state = {
    numPlant: 0,
    showTableAddPlant: false,
    arrPlants: [],
    arrImg: [
      { type: 0, img: sapling },
      { type: 1, img: mama },
    ],
  };

  handleAddPlant = () => {
    this.setState({
      showTableAddPlant: true,
    });
  };

  handleHiddenTable = () => {
    this.setState({
      showTableAddPlant: false,
    });
  };

  handleSelectPLant = (type) => {
    this.setState({
      arrPlants: [...this.state.arrPlants, type],
    });

    axios({
      method: "post",
      url: baseURL + "/farm/grow-plant",
      data: {
        username: this.props.username,
        plantType: type,
        landId: this.props.dataUser.body.inventory.lands[0].landId,
      },
    }).then((res) => {
      if (res.data.status === 1) {
        this.props.dataUser.body.inventory.plants[type]--;
        this.props.dataUser.body.farmings = [
          ...this.props.dataUser.body.farmings,
          {
            plant: {
              plantName: type == 0 ? "Sunflower Sapling" : "Sunflower mama",
            },
          },
        ];
        alert("Grow success!");
      } else {
        alert("Error");
      }
    });
  };

  render() {
    let show = this.state.showTableAddPlant;
    return (
      <div className="land">
        <div id="info-land">
          <button className="add-plant" onClick={() => this.handleAddPlant()}>
            {" "}
            +{" "}
          </button>
        </div>
        <div id="body-land">
          {console.log(this.props.dataUser.body.farmings)}
          {this.props.dataUser.body.farmings.map((item, index) => {
            return (
              <Plant
                type={item.plant.plantName == "Sunflower Sapling" ? 0 : 1}
              />
            );
          })}
        </div>
        {show === true ? (
          <>
            <SelectPlant
              arrPlantsInInventory={this.props.arrPlantsInInventory}
              dataUser={this.props.dataUser}
              handleSelectPLant={this.handleSelectPLant}
            />
            <button id="hidden" onClick={() => this.handleHiddenTable()}>
              X
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    );
  }
}
