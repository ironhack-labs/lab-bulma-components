import React from 'react'

import './CoolButton.css'
import 'bulma/css/bulma.css'


const CoolButton = props => {


    return (

    <>
    <button className="button is-danger is-small is-rounded">{props.buttonNameOne}</button>
    </>

    )

}

export default CoolButton
