import React from 'react';

import 'bulma/css/bulma.css';


function FormField(props) {
    
    return (
        <div>
            <div className="field">
                <label className="label">{props.myLabel}</label>
                <div className="control">
                    <input className="input" type={props.myType} placeholder={props.myPlaceholder} />
                </div>
            </div>
        </div>
    );
};

export default FormField;