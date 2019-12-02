import React, { Component } from "react";
import "bulma/css/bulma.css";

export default class FormField extends Component {
    constructor(){
        super();
    }
  render() {
    return (
        <div className="field">
          <label className="label">{this.props.label}</label>
          <div className="control">
            <input className="input" type={this.props.type} placeholder= {this.props.placeholder} />
          </div>
        </div>
    );
  }
}
