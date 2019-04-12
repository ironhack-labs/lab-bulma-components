import React from "react";

const FormField = ({type,placeholder,name}) =>{
    return (
        <div className="field">
            <label className="label">{name}</label>
            <div className="control">
                <input className="input" type={type} placeholder={placeholder}/>
            </div>
        </div>
    )
}


export default FormField;