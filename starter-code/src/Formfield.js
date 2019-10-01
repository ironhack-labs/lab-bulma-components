import React, { Component } from 'react'

export default class Formfield extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="field">
        <label className="label">{this.props.label}</label>
        <input className="input" type="text" placeholder={this.props.placeholder} />
      </div>
    )
  }
}
