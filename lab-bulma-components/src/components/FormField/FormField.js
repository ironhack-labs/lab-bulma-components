import React from 'react'

//css
import 'bulma/css/bulma.css';
import './FromField.css'


const FormField = props => {
    
    return (
      <div className='field form'>

        <label className='label'>Name</label>
        <input name='name' className='input' placeholder='e.g Alex Smith' type='text'></input>
        <label className='label'>{props.name}</label>
        <br />
        <label className='label'>Email</label>
        <input name='email' className='input' placeholder='e.g alexsmith@gmail.com' type='email'></input>
        <label className='label'>{props.email}</label>

      </div>

    )
}

export default FormField