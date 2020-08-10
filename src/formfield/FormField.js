import React from 'react'
import 'bulma/css/bulma.css';

export const FormField = props => {
    return (
        <div>
            <div class="field">
                <label class="label">{props.label}</label>
                <div class="control">
                    <input class="imput" type={props.type} placeholder={props.placeholder}/>
                </div>
            </div>
        </div>
    )
}

export default FormField;