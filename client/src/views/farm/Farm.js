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
  };
  handleUseItem = (type) => {
    if (this.state.arrItems[type - 1].amount < 1) {
      alert("dont enought item!");
      return;
    }
    let arr = [...this.state.arrItems];
    arr[type - 1] = { ...arr[type - 1], amount: arr[type - 1].amount - 1 };
    this.setState({ arrItems: arr });
  };
  handleBuyItem = (type) => {
    let arr = [...this.state.arrItems];
    arr[type - 1] = { ...arr[type - 1], amount: arr[type - 1].amount + 1 };
    this.setState({ arrItems: arr });
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
                />
                <ShopTool
                  moneyAmount={this.state.moneyAmount}
                  handleBuyItem={this.handleBuyItem}
                />
              </div>
            </Route>
            <Route path="/farm">
              <div className="farm">
                <SidebarItem
                  arrItems={this.state.arrItems}
                  openShop={false}
                  handleUseItem={this.handleUseItem}
                />
                <Land />
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
