import React, { Component } from "react";

class Container extends Component {
  render() {
    const { label, type, placeholder } = this.props;
    return (
      <div className="Container">
        <div className="field">
          <label className="label">{label}</label>
          <div className="control">
            <input className="input" type={type} placeholder={placeholder} />
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
