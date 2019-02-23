import React, { Component } from 'react';

class FormField extends Component {
  render() {
    console.log('props=', this.props);
    const {field, control, placeholder} = this.props;
    return (
      <div className="formfield">
        <div className="field">
          <label className="label">{field}</label>
          <div className="control">
            <input className="input" type={control} placeholder={placeholder}/>
          </div>
        </div>
      </div>
    );
  }}

  
  export default FormField;

