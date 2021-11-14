import React, { Component } from "react";
import "../../styles/Land.scss";
import Plant from "../../components/Plant";
import SelectPlant from "../../components/SelectPlant";

export default class Land extends Component {
  state = {
    numPlant: 0,
    arrPlants: [],
    showTableAddPlant: false,
  };

  handleAddPlant = () => {
    this.setState({
      showTableAddPlant: true,
    })
  };

  handleHiddenTable = () => {
    this.setState({
      showTableAddPlant: false,
    })
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
          <Plant />
          <Plant />
          <Plant />
          <Plant />
          <Plant />
          <Plant />
          <Plant />
        </div>
        {show === true ?(
          <>
          <SelectPlant
            arrPlantsInInventory={this.props.arrPlantsInInventory}
          />
          <button id="hidden" onClick={() => this.handleHiddenTable()}>X</button>
          </>
        ) : (
          <></>
        ) }
      </div>
    );
  }
}
