import React from 'react'


function form(props) {
    return (

        <div className="field">
            <label className="label">{props.label}</label>
            <div className="control">
                <input className="input" type="text" placeholder="e.g Alex Smith" />
            </div>
        </div>

    )
}

export default form