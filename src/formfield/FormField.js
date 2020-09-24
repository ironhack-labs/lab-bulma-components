import React from 'react';
import 'bulma/css/bulma.css';

function FormField(props) {
    return (
        <div className='field container'>
            <label className='label'>{props.label}</label>
            <div className="control">
                <input className="input" type="text" placeholder={props.placeholder} />
             </div>
        </div>
    );
};

export default FormField; 