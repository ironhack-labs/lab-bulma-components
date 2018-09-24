import React from 'react';
import './FormField.css';

const formField = (props) => (
        <div className="field wrapper-login">
            <label className="label">{ props.label }</label>
            <div className="control">
                <input className="input" type={ props.type } placeholder={ props.placeholder } />
            </div>
        </div>
);

export default formField;