import React from 'react';

function FormField(props) {
    return (
        <div className="Field">
            <label className="Label">{props.label}</label>
            <div className="Control">
                <input className="input" type={props.type} placeholder={props.placeholder} />
            </div>
        </div>
    );
}

export default FormField;