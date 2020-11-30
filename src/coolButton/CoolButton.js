import React from 'react'
import 'bulma/css/bulma.css'

const coolButton = (props) => {


    
    return (
        <button className={'button ' + props.className} type={props.type}>{props.title}</button>
    )
}

export default coolButton