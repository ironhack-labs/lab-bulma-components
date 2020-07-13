import React from 'react'
import 'bulma/css/bulma.css'
import './CoolButton.css'

const CoolButton = () => {
    return (
        <div className = 'mine-center'>
            <button className="button is-rounded my-class is-danger is-small">Login</button>
            <button className="button is-small is-success">Singup</button>
        </div>
    )
}   

export default CoolButton