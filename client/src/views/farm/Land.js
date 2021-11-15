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
    })
    this.props.dataUser.body.inventory.plants[type]--;
    console.log(this.props.dataUser.body.inventory.lands);
    axios({
      method: "post",
      url: baseURL + "/farm/grow-plant",
      data: {
        username: this.props.username,
        plantType: type,
        landId: this.props.dataUser.body.inventory.lands.landId,
      },
    }).then((res) => {
      res.data.status === 1 ? alert("Grow success!") : alert("Error");
    });
  }

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
          {this.state.arrPlants.map((item, index) => {
            return <Plant type={item} />;
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
