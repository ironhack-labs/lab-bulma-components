import React from 'react'
import './Formfield.css'

export default function formfield (props) {
  // console.log(props)

  return (
    <div className='formField'>
      <div className='field'>
        <label className='label is-medium'>{props.label}</label>
        <div className='control'>
          <input
            className='input is-medium'
            type={props.type}
            placeholder={props.placeholder}
          />
        </div>
      </div>
    </div>
  )
}
