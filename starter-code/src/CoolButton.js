import React, { Component } from "react";
import "./App.css";

class CoolButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div class="field">
        <button className={this.props.className}>{this.props.value}</button>
        </div>
    );
  }
}
export default CoolButton;