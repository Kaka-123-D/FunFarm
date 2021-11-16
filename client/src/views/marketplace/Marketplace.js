import React, { Component } from "react";
import Nav from "../../components/Nav";
import SearchTable from "./SearchTable";
import SellingTable from "./SellingTable";
import "../../styles/Marketplace.scss";

export default class Marketplace extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="marketplace">
          <SellingTable />
          <SearchTable />
        </div>
      </>
    );
  }
}
