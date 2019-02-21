import React, { Component } from 'react';

export default class FormField extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
          <div>
              <label className="label padding">{this.props.label}</label>
              <input label={this.props.label} className="input" type={this.props.type} placeholder={this.props.placeholder}></input>
          </div>
        );
    }
}