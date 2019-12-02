import React from "react";

function FormField(props) {
    return (
     <div className="tile is-6 is-vertical">
        <div className="field">
            <label className="label">{props.fieldName}</label>
            <div className="control">
            <input className="input" type={props.fieldType} placeholder={props.fieldPlaceholder} width="50"/>
            </div>
        </div>
     </div>   
    );
}

export default FormField;