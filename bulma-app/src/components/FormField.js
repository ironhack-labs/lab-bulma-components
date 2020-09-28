import React from 'react'
import 'bulma/css/bulma.css'
import './FormField.css'



const FormField = props => {
    return (
        <>
            <div className="field config2">
                <label className="label">{props.label}</label>
                <div className="control">
                    <input className="input" type={props.type} placeholder={props.placeholder} />
                </div>
            </div>

        </>
    )
}




export default FormField