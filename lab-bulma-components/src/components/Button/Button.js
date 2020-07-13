import React from 'react'
import 'bulma/css/bulma.css';
import './Button.css'

const Button = props => {

    return (

          <div>
            <button class="button is-rounded my-class is-danger is-small">{props.name}</button>
            {/* <button class="button is-small is-success">{props.name}</button> */}
            
          </div>

    )
}

export default Button