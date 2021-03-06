import React from "react";
import "./card.css";
import Weather from "../Weather/index.js";

class Card extends React.Component {
  render() {

    return(<div className="card">
    <header>{this.props.name}</header>
    {this.props.temperature}
        {this.props.temperatureUnit}
        <p>
          {this.props.detailedForecast}
        </p>

    </div>
    );

  }
}
export default Card;