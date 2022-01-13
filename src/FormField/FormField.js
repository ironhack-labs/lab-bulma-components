import React from 'react';
import "./FormField.css"
import 'bulma/css/bulma.css';


export const FormField = props => {
    return (   
    <div className="field sizeForm marginLeft">
            <label className="label">{props.label}</label>
               <input
               className="input" 
               type={props.type} 
               placeholder={props.placeholder}></input>
        </div>     
    )
};

export default FormField;
