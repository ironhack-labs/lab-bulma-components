import React,{ Component } from "react";
import ReactDOM from "react-dom" ;
import 'bulma/css/bulma.css';

const FormField = props => {
    return (
      <div className='field'>
        <label className='label'>{props.label}</label>
        <div className="control">
            <input className="input" type="text" placeholder={props.placeholder} />
        </div>
      </div>

    );
  };
export default FormField;



