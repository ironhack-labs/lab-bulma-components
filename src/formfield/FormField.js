import React, { Component } from "react";
import 'bulma/css/bulma.css';

class FormField extends Component {
  render(){
    const { label, type, placeholder } = this.props
    return (
      <div className='field column'>
        <label className='label'>{label}</label>
        <div className="control">
          <input className='input' placeholder={placeholder} type={type}/>
        </div>
      </div>
    );
  }
};

export default FormField