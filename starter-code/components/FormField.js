import React from 'react'

function FormField(props) {

    return (
    <form className="form-container">
        <div className="field">
            <label class="label">{props.label}</label>
            <div class="control">
                <input class="input" type={props.type} placeholder={props.placeholder}/>
            </div>
        </div>
    </form>
    )
}

export default FormField