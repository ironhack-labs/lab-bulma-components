import React, { Component } from "react";
import FormField from './FormField';

export default class Form extends Component {
  render() {
    return (
      <div>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
      </div>
    );
  }
}
