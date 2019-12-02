import React, { Component } from 'react'

export default class FormField extends Component {
    render() {
        return (
            <div className='column is-one-third field'>
  <label className="label">{this.props.label}</label>
  <div className="control">
    <input className="input" type={this.props.type} placeholder={this.props.placeholder} />
  </div>
</div>
        )
    }
}