import React from 'react'
import 'bulma/css/bulma.css'

export const FormField = props => 
    <React.Fragment>
        <div className="field">
            <label className="label">{props.label}</label>
            <div className="control">
                <input className="input" type={props.type} placeholder={props.placeholder} />
            </div>
        </div>
    </React.Fragment>