import React from 'react';
import 'bulma/css/bulma.css';
import './FormField.css'

const Form = props => {

    return (
        <div>
            <div className="field">
                <label className="label">{props.label}</label>
                <div className="control">
                <input className="input" type="text" placeholder={props.placeholder} />
                </div>
            </div>
           
        </div>
    );
};

export default Form;