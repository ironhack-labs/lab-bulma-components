import React from 'react';
import './FormField.css';
import 'bulma/css/bulma.css'

function FormField({label1, type1, placeholder1 }){

    return(

    <div className="field">
      <label className="label">{label1}</label>
      <div className="control">
        <input className="input" type={type1} placeholder={placeholder1} />
      </div>
    </div>
    
    )
}


export default FormField;