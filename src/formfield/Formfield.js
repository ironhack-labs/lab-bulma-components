import React from 'react'

const Formfield = props =>{
    return (
        <div>
        <div className="field">
        <label className="label">{props.label}</label>
        <div className="control">
            <input className="input" type="text" placeholder={props.placeholder} />
        </div>
        </div>
        </div>
    )
}

export default Formfield