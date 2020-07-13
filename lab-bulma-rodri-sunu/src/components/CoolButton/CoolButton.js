import React from 'react'

import './CoolButton.css'
import 'bulma/css/bulma.css'

const CoolButton = props => {

    return (
    <>
        <button class="button is-rounded my-class is-danger is-small">Sign Up</button>
        <button class="button is-small is-success">Log In</button>    
    </>
    )
}

export default CoolButton