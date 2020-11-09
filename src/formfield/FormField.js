import 'bulma/css/bulma.css';
import React from 'react'
import "./FormField.css"

const FormField = ({label, type, placeholder}) => {
    return (
        <form>
            <div className="field">
                <label className="label">{label}</label>
                <div className="control">
                     <input className="input" type= {type} placeholder={placeholder} />
                </div>
             </div>
        </form>
    )
}

export default FormField
