import 'bulma/css/bulma.css';
import React from 'react';

const FormField = ({label, placeholder, type}) => {  

return (  

<div className="field">
  <label className="label">{label}</label>
  <div className="control">
    <input className="input" type={type} placeholder= {placeholder} />
  </div>
</div>
)
}

export default FormField