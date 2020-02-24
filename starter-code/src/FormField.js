import React from 'react';

function FormField(props) {
    return (
      <div className="field">
        <label className="label">{props.label}</label>
        <div className="control">
          <input className="input" type={props.inputType} placeholder={props.label}/>
        </div>
      </div>
    );
}

export default FormField