import React from 'react';
import 'bulma/css/bulma.css';

const Formfield = props => {
    return (
        <div className="field">
            <label htmlFor="" className="label">{props.label}</label>
            <div className="control">
                <input className="input" name="" id="" placeholder={props.placeholder}/>
            </div>
        </div>
    )
}
export default Formfield;