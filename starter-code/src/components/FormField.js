import React, { Component } from "react";


class FormField extends Component {
  render() {

    const FormField = ({ Name, type, placeholder }) => {
      return (
        <div className="container-formfield">
        <div class="field">
          <label class="label">{Name}</label>
          <div class="control">
            <input class="input" type={type} placeholder={placeholder} />
          </div>
        </div>
      </div>
      )
    };
   
  }
}

export default FormField;
