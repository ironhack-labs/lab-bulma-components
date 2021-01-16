import React from 'react';
import './FormField.css';
import 'bulma/css/bulma.css';


const FormField = props => {
    return (
        <div>
            <div className="field">
                <label className="label">{props.myLabel} </label>
                <div className="control">
                    <input className="input" type={props.myType} placeholder={props.myPlaceholder} />
                </div>
            </div>
        </div>
    );
};

export default FormField;