import React from 'react';
import 'bulma/css/bulma.css';

const FormField = props => {
    console.log(props)
    return(
        <div className="formDiv">
            <div className="input-field">
                <label className="label">{props.nameLabel}</label>
                <label className="label">{props.emailLabel}</label>
                
                <input className="input" type="text" placeholder={props.emailPldr} />
                </div>
            </div>
        
    )
}

export default FormField;