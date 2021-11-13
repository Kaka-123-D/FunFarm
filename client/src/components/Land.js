import React, { Component } from 'react'
import '../styles/Land.scss'
import Plant from './Plant'

export default class Land extends Component {
    state = {
        numPlant: 0,
        arrPlants: [
        ]
    }

handleAddPlant = () => {
    
    this.state.arrPlants.push(<Plant/>)
    this.setState({
        numPlant: this.state.numPlant+1,
    })

}

    render() {
        console.log(this.state.arrPlants);
        return (
          <div className="land">
            <div id="info-land">
              <button
                className="add-plant"
                onClick={() => this.handleAddPlant()}
              >
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
          </div>
        );
    }
}
