import React, { Component } from 'react'
import "./FormField.css"

export default class FormField extends Component {
  render() {
    return (
      <div className="form">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </div>
    )
  }
}
