import React from 'react'

//css
import 'bulma/css/bulma.css';
import './FromField.css'


const FormField = props => {
    
    return (

      <div className='field form'>

        <label className={props.label}>{props.label}</label>
        <input name={props.label} className='input' placeholder={props.placeholder} type={props.type}></input>
        
      </div>

    )
}

export default FormField