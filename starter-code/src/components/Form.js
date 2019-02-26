import React from 'react';

export default function Form(props) {

    return (
      <div className="field">
        <label className="label">{props.label}</label>
          <div className="control">
            <input className="input" type={props.type} placeholder={props.placeholder}/>
          </div>
      </div>
    );
}