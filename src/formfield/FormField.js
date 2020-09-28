import React from 'react'

import 'bulma/css/bulma.css';


const FormField = props => {

    return (
        <div className='field'>
            <label className={props.label}>{props.label}</label>
            <input className="input" name={props.label} placeholder={props.placeholder} type={props.type} />
        </div>
    )
}

export default FormField