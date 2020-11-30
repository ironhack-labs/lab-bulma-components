import React from 'react'
import './CoolButton.css'
import 'bulma/css/bulma.css';

const FormField = (props) => {
    return (
      <div className='Coolbutton'>
          <button type={props.type} >{props.value}</button>
      </div>
    );
  };

export default FormField;