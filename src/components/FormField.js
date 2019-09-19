import React, { Component } from 'react'

export default class FormField extends Component {
  
  render() {
    return (
      <div>

        <div className='field'>
          <div className='control'>
            <label className='label'>{this.props.label}</label>
            <input className='input' type={this.props.type} placeholder={this.props.placeholder} />
          </div>
        </div>

      </div>
    )
  }
}
