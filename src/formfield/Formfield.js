
import "bulma/css/bulma.css";
import React from 'react'

export default function Formfield (props) {
    return (
        <div className='field'>
      <label className='label'>{props.label}</label>
      <div className="control">
          <input type="text" className="input" type={props.type} placeholder={props.placeholder} />
      </div>
    </div>
    )
}
