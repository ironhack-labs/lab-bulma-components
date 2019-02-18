import React, { Component } from "react";
import "./App.css";


class Signup extends Component {
  render() {
    return (
        <div class="field2">
        <Navbar/>
        <label class="label">{this.props.label}</label>
        <div class="control">
        <input class="input" type={this.props.type} placeholder={this.props.placeholder} />
        </div>
      </div>
    );
  }
}
export default Signup;



