import React from 'react'
import 'bulma/css/bulma.css';

const FormField = props => {

    return (
        <>
            <div class="field">
                <label class="label">{props.label}</label>
                <div class="control">
                <input class="input" type={props.type} placeholder={props.placeholder} />
                </div>
                </div>
                <div class="field">
                <label class="label">Email</label>
                <div class="control">
                <input class="input" type={props.type} placeholder={props.placeholder} />
                </div>
            </div>
        </>
    );

}


export default FormField;