import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './formfield.css'

class FormField extends Component {
  render() {
    return (
      <div className="field">
        <div className="control">
          <label>{this.props.label}</label>
          <input
            className="input is-rounded"
            type={this.props.type}
            placeholder={this.props.placeholder}
          ></input>
        </div>
      </div>
    )
  }
}

export default FormField
