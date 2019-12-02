import React, { Component } from "react";

class FormField extends Component {
    render() {
      return (
        <div className="field">
        <div className="control">
          <input className="input is-primary" label={this.props.label} type= {this.props.type} placeholder={this.props.placeholder}></input>
        </div>
        </div>
      );
    }
  }
  
  export default FormField;
