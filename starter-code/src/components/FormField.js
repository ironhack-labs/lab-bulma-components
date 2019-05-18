import React from 'react'

export default ({label, type, placeholder}) => (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input className="input" type={type} placeholder={placeholder} />
      </div>
    </div>
  )