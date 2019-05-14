import React, { Component } from 'react';

export default class Formfield extends Component {
  render() {
    return (
      <div className="form-container">
        <div className="field">
          <label className="label">{this.props.name}</label>
          <div className="control">
            <input className="input" type="text" placeholder={this.props.placeholder} />
          </div>
        </div>
      </div>
    );
  }
}
