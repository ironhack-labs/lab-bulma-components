import React from 'react'

import 'bulma/css/bulma.css';

const CoolButton = props => {
    return (
        <>

            <button className={props.className} type={props.type}>{props.name}</button>

        </>
    )
}

export default CoolButton