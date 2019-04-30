
import React from "react"
import './FormField.css'

export default function FormField({label, type, placeholder}) {
  return (
      <div className="field">
        <label className="label">{label}</label>
        <div className="control">
          <input className="input" type={type} placeholder={placeholder} />
        </div>
      </div>
  )
}