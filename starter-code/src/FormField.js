import React from "react";

import "bulma/css/bulma.css";

export default class FormField extends React.Component {
  render() {
    return (
      <div className="field">
        <label className="label">{this.props.label}</label>
        <div className="control">
          <input
            type={this.props.type}
            className="input"
            placeholder={this.props.placeholder}
          />
        </div>
      </div>
    );
  }
}

