import React from 'react'

const FormField = (props) => {

    return (
   
<div className="field form">
  <label className="label"> {props.label} </label>
  <div className="control">
    <input className="input" type={props.type} placeholder={props.placeholder} />
  </div>
</div>

    )}

    export default FormField
