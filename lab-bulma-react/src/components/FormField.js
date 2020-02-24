import React from 'react'

const FormField = props =>
    <div className="form-dgn">

        <div className="field">
            <label className="label">{props.label}</label>
            <div className="control">
                <input className="input" type={props.type} placeholder={props.placeholder} />
            </div>
        </div>


    </div>

export default FormField

