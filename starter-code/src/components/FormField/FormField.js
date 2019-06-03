import React from 'react'
import ReactDOM from 'react-dom'

const FormField = props => {
  const {label, type, placeholder} =props
  return(
    <div className="field">
        <label>{label}</label>
      <div className="control">
        <input className="input" type={type} placeholder={placeholder}/>
      </div>
    </div>
  )
}

export default FormField