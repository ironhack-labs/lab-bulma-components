import React from 'react'

export default function Formfield(props) {
    return (
        <div className="field m-6">
        <label className="label">{props.label}</label>
        <div className="control">
          <input className="input" type={props.type} placeholder={props.placeholder} />
        </div>
      </div>
    )
}
