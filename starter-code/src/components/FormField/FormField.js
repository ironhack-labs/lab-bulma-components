import React, { Component } from 'react'

export default class FormField extends Component {
  constructor(props) {
    super(props)
    this.label = this.props.label,
    this.type = this.props.type,
    this.placeholder = this.props.placeholder
  }

  render() {
    return (
    <div className="field">
      <label className="label">{this.label}</label>

      <div className="control">
        <input className="input" type={this.type} placeholder={this.placeholder} />
      </div>

    </div>
    )
  }
}
