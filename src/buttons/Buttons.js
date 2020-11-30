import 'bulma/css/bulma.css'
import React from 'react'

const CoolButton = (props) => {
    return (
        <div className='Buttons'>
            <button class="button is-rounded my-class is-danger is-small">LOG IN</button>
            <button class="button is-small is-success">SIGN UP</button>
        </div>
    )
}

export default CoolButton