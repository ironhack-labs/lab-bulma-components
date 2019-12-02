import React from 'react'

const FormField = (props) => {
    return (
        <>
        <div className="field has-text-left">
            <label className="label">{props.label}</label>
            <div className="control">
                <input className="input is-medium" type={props.type} placeholder={props.placeholder} />
            </div>
        </div>
        </>
    )
  }
  
  export default FormField;






