import React from 'react'
import 'bulma/css/bulma.css';


const FormField = (props) => {
    return (
        <div class="field">
  <label class="label">{props.label}</label>
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Name" />
    </div>
  <label class="label">Email</label>
  <div class="control">
    <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
  </div>

  </div>
    )

    
}

export default FormField;
