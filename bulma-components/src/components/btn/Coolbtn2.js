import React from 'react'

import 'bulma/css/bulma.css';

const Coolbtn2 = props => {
    return(
        <button type={props.type} class="button is-small is-success">{props.text}</button>
    )
}

export default Coolbtn2