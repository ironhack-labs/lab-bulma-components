import React, { Component } from 'react'
import './formField.css';

export default class FormField extends Component {
    render() {
        return (
          <div>
            <label className="label">{this.props.label}</label>
            <div className="control">
              <input className="input" type={this.props.type} placeholder={this.props.placeholder}/>
            </div>
          </div>
        );
    }
}
