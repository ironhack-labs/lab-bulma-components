import React, { Component } from "react";

class FromField extends Component {
  render() {
    return (
      <div className="FromField">
        <div className="field">
          <label className="label">{this.props.label}</label>
          <div className="control">
            <input className="input" type={this.props.type} placeholder={this.props.placeholder}/>
          </div>
        </div>
        
      </div>
    );
  }
}

export default FromField;