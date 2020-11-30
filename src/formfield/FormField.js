import React from 'react';
import 'bulma/css/bulma.css';

const FormField = props => {

    return (

        <div className="field mt-5">
            <label className="label">{props.label}</label>
            <div className="control">
                <input className={props.input} type={props.type} placeholder={props.placeholder} />
            </div>
        </div>

    )
}




export default FormField