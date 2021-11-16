import React, { Component } from "react";
import plantsTabIcon from "../../assets/images/plantsTabIcon.png";
import mamaTreesTabIcon from "../../assets/images/mamaTreesTabIcon.png";
import landsTabIcon from "../../assets/images/landsTabIcon.png";
import Plant from "../../components/Plant"
import "../../styles/SellingTable.scss";
export default class SellingTable extends Component {
  render() {
    return (
      <div className="selling-table">
        <div className="header-selling-table">
          <ul className="select-tab">
            <li>
              <a>
                <img src={plantsTabIcon} alt="plantsTab" className="icon" />
                &nbsp;Plants
              </a>
            </li>
            <li>
              <a>
                <img
                  src={mamaTreesTabIcon}
                  alt="mamaTreesTab"
                  className="icon"
                />
                &nbsp;Mother Tree
              </a>
            </li>
            <li>
              <a>
                <img src={landsTabIcon} alt="landsTab" className="icon" />
                &nbsp;Land
              </a>
            </li>
          </ul>
          <div className="info-table">
            <p className="count-plants">{100000} PLants</p>
            <select className="sort-type">
              <option>Lowest Price</option>
              <option>Lowest ID</option>
              <option>Highest Price</option>
              <option>Highest ID</option>
              <option>Latest</option>
            </select>
          </div>
        </div>
        <div className="body-selling-table">
          <Plant type={0} />
          <Plant type={0} />
          <Plant type={0} />
          <Plant type={0} />
          <Plant type={0} />
        </div>
        <div className="next-page">
          <button>&#8249;</button>
          &nbsp;Page: <input value={1}></input>&nbsp; of {100}&nbsp;
          <button>&#8250;</button>
        </div>
      </div>
    );
  }
}
