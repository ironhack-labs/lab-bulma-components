import React from 'react';
import 'bulma/css/bulma.css';

function FormField(props){
    return(
        <div className='field'>

        	<label className='label'>{props.label}</label>
            <input></input>

        </div>
    )
}

export default FormField;