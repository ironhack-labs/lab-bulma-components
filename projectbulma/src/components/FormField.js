import React from 'react'
import '../styles/form-field.css'


const FormField = props => {

    return ( <div className="container-data">
      
    <div className="field">
    <label class="label">{props.label}</label>
    <div className="control">
      <input className="input" type={props.type} placeholder={props.placeholder}/>
    </div>
  </div>
  </div>
     
    )
}

export default FormField