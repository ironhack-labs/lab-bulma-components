import React from 'react'
import './formField.css'

const FormField= props =>{
return(
   <>
    <div className="field">
        <label className="label">{props.text}</label>
        <div className="control">
            <input className="input" type={props.type} placeholder={props.placeholder} />
        </div>
    </div>
    </>
)
}
export default FormField