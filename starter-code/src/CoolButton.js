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



// let classes = "";
// if (this.props.isSmall) {
//   classes += " is-small";
// }
// if (this.props.isDanger) {
//   classes += " is-danger";
// }
// if (this.props.isSuccess) {
//     classes += " is-success"
// }
