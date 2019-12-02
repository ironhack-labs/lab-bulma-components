import React, { Component } from "react";

export default class Formfield extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id= "formfield">
          <h3>{this.props.set}</h3>
          <p>{this.props.placeholder}</p>
      </div>
    );
  }
}
