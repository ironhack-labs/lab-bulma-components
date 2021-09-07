import React from 'react'
import './FormField.css'
export default function FormField(props) {
    return (
        <div className="form-field">
            <div className="field">
                <label className="label">{props.name}</label>
                <div className="control">
                    <input className="input" type="text" placeholder={props.placeholder} type={props.type}/>
                </div>
            </div>
        </div>
    )
}
