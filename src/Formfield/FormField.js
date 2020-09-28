import React from "react"

import "./FormField.css"

const FormField = props => {

    return (
        <div className='field'>
            <label className='label'>{props.label}</label>
            <input class="input" type={props.type} placeholder={props.placeholder}/>
        </div>
    )


}

export default FormField