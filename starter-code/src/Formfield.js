import React from "react";

function Formfield(props){
    return (       
        <div className="field is-expanded">
            <label className="label">{props.label}</label>
            <div className="control">
                <input className="input" type={props.type} placeholder={props.placeholder} />
            </div>
        </div>
    )
}

export default Formfield;

