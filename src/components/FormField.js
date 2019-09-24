import React, { Component } from 'react'
import { thisExpression } from '@babel/types'

export default class FormField extends Component {
  render() {
    return (
      <div>
        <div className="field">
        <label className="label">{this.props.label}</label>
        <div className="control">
          <input 
          type={this.props.type} 
          className="input" 
          type="email" 
          placeholder={this.props.placeHolder}/>
        </div>
        </div>
      </div>
    )
  }
}
