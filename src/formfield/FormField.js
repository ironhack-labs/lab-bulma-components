import React from "react";
import './Formfield.css';

function Formfield (props) {
    return (    
    <div>
        <div className="field">
            <label className="label">{props.label}</label>
            <div className="control">
                <input className="input" type={props.type} placeholder={props.placeholder} />
            </div>
        </div>
    </div>
)
}

export default Formfield;