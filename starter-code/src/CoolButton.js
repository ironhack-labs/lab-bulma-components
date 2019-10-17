import React, { Component } from "react";
import "bulma/css/bulma.css";

export default class CoolButton extends Component {
  render() {
    return (
      <div>
        <button className={this.props.type}>{this.props.name}</button>
      </div>
    );
  }
}
