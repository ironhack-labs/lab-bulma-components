import React from 'react'

export default function FormField(props) {
    return (
        <div className="field">
            <label className="label">{props.label}</label>
            <div className="control">
                <input className="input" type="text" placeholder="e.g Alex Smith" />
            </div>
        </div>
    )
}
