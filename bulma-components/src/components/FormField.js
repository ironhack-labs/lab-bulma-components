import React from 'react'

const FormField = (props) => {
  return (
    <form>
      <label className="label">{props.label}</label>
      <input className="input" type={props.type} placeholder={props.placeholder}></input>
    </form>
  )
}

export default FormField