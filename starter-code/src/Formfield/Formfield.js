import React from 'react'
import './Formfield.css'

export default function formfield (props) {
  return (
    <div className='formField'>
      <div class='field'>
        <label class='label is-medium'>Name</label>
        <div class='control'>
          <input
            class='input is-medium'
            type='text'
            placeholder='e.g Alex Smith'
          />
        </div>
      </div>
      <div class='field'>
        <label class='label is-medium'>Email</label>
        <div class='control'>
          <input
            class='input is-medium'
            type='email'
            placeholder='e.g. alexsmith@gmail.com'
          />
        </div>
      </div>
    </div>
  )
}
