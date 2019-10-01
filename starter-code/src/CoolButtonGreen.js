import React, { Component } from "react";

export default class CoolButtonGreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button className="button is-small is-success">{this.props.name}</button>
      </div>
    );
  }
}
