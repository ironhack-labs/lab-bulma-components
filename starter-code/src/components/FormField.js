import React, { Component } from 'react';

class FormField extends Component {
  render() {
    return (
      <div>
        <div className="field">
          <label className="label">{this.props.label}</label>
          <div className="control">
            <input className="input" label={this.props.label} type={this.props.type} placeholder={this.props.placeholder} />
          </div>
        </div>
      </div>
    )
  }
}

export default FormField;