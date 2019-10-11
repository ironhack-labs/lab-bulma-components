// Formfield is a class component

//https://reactjs.org/docs/components-and-props.html

import React from "react";
// A) import React, { Component } from "react";

// class FormField extends Component {     // if using A )

class FormField extends React.Component {
  render() {
    return (
      
        <div className="field">
          <label className="label">{this.props.label}</label>
          <div className="control">
            <input className="input" type={this.props.type} placeholder={this.props.placeholder} />
          </div>
        </div>
      
    
    );
  }
}

export default FormField;

