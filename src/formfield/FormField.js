import React from 'react';
import 'bulma/css/bulma.css';
import './FormField.css'

function FormField (props) {
        return (
        <div className="block m-5">
            <div className='field'>
            <label className='label'>{props.label}</label>
            <input class="input" type="email" placeholder={props.placeholder} />
          </div>
        </div>
        )
}

export {FormField};