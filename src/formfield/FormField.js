import React from 'react';
import 'bulma/css/bulma.css';
import './Formfield.css'

const FormField = props => {
    return (
      <div className='field'>
        <label className='label'>{props.label}</label>
        <div class="control">
            <input class="input" type="text" placeholder={`${props.placeholder}`} />
        </div>
      </div>
    );
  };

export default FormField