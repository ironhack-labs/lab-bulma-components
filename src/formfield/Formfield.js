import React from 'react'
import './Formfield.css'

export default function Formfield(props) {

    return (
        <div className="FormfieldContainer">
            <div className="field">
                <label className="label">{props.label}</label>
                <div className="control">
                    <input className="input" type="text" placeholder="e.g Alex Smith" />
                </div>
            </div>
        </div>
      );
}
