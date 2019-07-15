import React, { Component } from "react";

export default class CoolButton extends Component {
  render() {
    return (
      <div>
        <button className={"button " + this.props.mike}>
          {this.props.children}
        </button>
      </div>
    );
  }
}
