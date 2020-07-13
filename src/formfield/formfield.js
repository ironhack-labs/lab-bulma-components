import React from 'react'

import 'bulma/css/bulma.css'


const Formfield = props => {

  return (

    <main>
        <div class="field">
        <label class="label">{props.label}</label>
        <div class="control">
            <input class="input" type={props.type} placeholder={props.placeholder} />
        </div>
        </div>
    </main>
  
  )
}

export default Formfield