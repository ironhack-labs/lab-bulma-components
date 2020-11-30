import React from 'react'
import 'bulma/css/bulma.css'


const FormField = props => {
  return (
    <div className='field'>
          <label className='label'>{props.label}</label>
      <div>
          <input className={props.input} type="text" placeholder={props.placeholder}/>
      </div>
    </div>
  )
}

export default FormField