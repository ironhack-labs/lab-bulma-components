import React, {Fragment} from 'react';
import 'bulma/css/bulma.css';
import './formfield.css';

export default function FormField(props) {
    console.log(props)
        return (
            <Fragment>
            <div className="field">
                <label className="label">{props.label}</label>
                <div className="control">
                    <input className="input" type={props.type} placeholder={props.placeholder} />
                </div>
            </div>
                
            </Fragment>
    
        );
    
}

// export default FormField;