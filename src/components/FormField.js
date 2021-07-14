import React from "react";
import 'bulma/css/bulma.css';



function FormField (props) {

    const {label, type, placeholder} = props

    return (
        
        <div className='field is-medium'>
            <label className='label'>{label}</label>
            <div class="control">
                <input class="input" type={type} placeholder={placeholder} />
            </div>
        </div>
    )

}

export default FormField;