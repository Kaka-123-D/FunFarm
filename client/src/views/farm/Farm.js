import React, { Component } from "react";
import Nav from "../../components/Nav";
import SidebarItem from "../../components/SidebarItem.js";
import Land from "./Land";
import "../../styles/Farm.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShopTool from "./ShopTool";
import smallPot from "../../assets/images/smallPot.png";
import bigPot from "../../assets/images/bigPot.png";
import water from "../../assets/images/water.png";
import scarecrow from "../../assets/images/scarecrow.png";
import greenhouse from "../../assets/images/greenhouse.png";
import sapling from "../../assets/images/sapling.svg";
import mama from "../../assets/images/mama.png";
import axios from "axios";

const baseURL = "http://localhost:3000";

export default class Farm extends Component {
  state = {
    moneyAmount: 500,
    reload: false,
    arrItems: [
      { type: 1, amount: 0, img: smallPot },
      { type: 2, amount: 0, img: bigPot },
      { type: 3, amount: 0, img: water },
      { type: 4, amount: 0, img: scarecrow },
      { type: 5, amount: 0, img: greenhouse },
    ],
    arrPlantsInInventory: [
      { name: "sapling", type: 0, amount: 2, img: sapling },
      { name: "mama", type: 1, amount: 1, img: mama },
    ],
    arrPlants: [],
  };

  handleUseItem = (type) => {
    if (this.state.arrItems[type].amount < 1) {
      alert("dont enought item!");
      return;
    }
    let arr = [...this.state.arrItems];
    arr[type] = { ...arr[type], amount: arr[type].amount - 1 };
    this.setState({ arrItems: arr });

    this.props.dataUser.body.inventory.tools[type]--;

    
  };

  handleBuyItem = (type) => {
    //mảng test bên client
    let arr = [...this.state.arrItems];
    arr[type] = { ...arr[type], amount: arr[type].amount + 1 };
    this.setState({ arrItems: arr });

    // mảng do server trả về 
    this.props.dataUser.body.inventory.tools[type] ++;

    axios({
      method: "post",
      url: baseURL + "/farm/buy-tool",
      data: {
        username: this.props.username,
        amount: 1,
        toolType: type,
      },
    }).then((res) => {
      res.data.status === 1 ? alert("Buy success!") : alert("Error");
    });
  };
  
  handleBuyPLant = (type) => {
    let arr = [...this.state.arrPlantsInInventory];
    arr[type] = { ...arr[type], amount: arr[type].amount + 1 };
    this.setState({ arrPlantsInInventory: arr });

    this.props.dataUser.body.inventory.plants[type]++;
    axios({
      method: "post",
      url: baseURL + "/farm/buy-plant",
      data: {
        username: this.props.username,
        amount: 1,
        plantType: type,
      },
    }).then((res) => {
      res.data.status === 1 ? alert("Buy success!") : alert("Error");
    });
  };

  render() {
    return (
      
      <div className="farm-background">
        <Nav />
        <Router>
          <Switch>
            <Route path="/farm/shop">
              <div className="shopTool">
                <SidebarItem
                  arrItems={this.state.arrItems}
                  openShop={true}
                  handleUseItem={this.handleUseItem}
                  dataUser={this.props.dataUser}
                />
                <ShopTool
                  moneyAmount={this.state.moneyAmount}
                  handleBuyItem={this.handleBuyItem}
                  handleBuyPLant={this.handleBuyPLant}
                />
              </div>
            </Route>
            <Route path="/farm">
              <div className="farm">
                <SidebarItem
                  arrItems={this.state.arrItems}
                  openShop={false}
                  handleUseItem={this.handleUseItem}
                  dataUser={this.props.dataUser}
                />
                <Land
                  arrPlantsInInventory={this.state.arrPlantsInInventory}
                  dataUser={this.props.dataUser}
                  username={this.props.username}
                />
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
