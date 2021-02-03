import React from 'react'
import 'bulma/css/bulma.css'

export const FormField = props => 
    <React.Fragment>
        <div class="field">
            <label class="label">{props.label}</label>
            <div class="control">
                <input class="input" type={props.type} placeholder={props.placeholder} />
            </div>
        </div>
    </React.Fragment>