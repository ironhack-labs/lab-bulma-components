import React from 'react';
import 'bulma/css/bulma.css';

function FormField(props){
    return(
        <div className='field'>

        	<label className='label'>{props.label}</label>
            <input placeholder={props.placeholder} type={props.type}></input>

        </div>
    )
}

export default FormField;