import React from "react";
import "./formField.css";


export default class FormField extends React.Component {

  render() {
    return (
      <div className="form">
        <div className="field">
        <label className="label">{this.props.label}</label>
        <div className="control">
            <input className="input" type={this.props.text} placeholder={this.props.placeholder}/>
        </div>
        </div>
      </div>
    );
  }
}
