import React from 'react'

export default function FormField(props) {
    return (
    <div className='field'>
      <label className='label'>{props.label}</label>
    <div class="control">
        <input class="input" type={props.type} placeholder={props.placeholder} />
    </div>
    </div>
        
    )
}
