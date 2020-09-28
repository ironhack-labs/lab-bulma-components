import React from 'react'
import '../message/node_modules/bulma/css/bulma.css'

const CoolButton = (props) => {
    let classString=''
    classString='button '+ props.className+ ' ' + props.color + ' ' + props.buttonsize
        return (
        <button  className={classString}>{props.text} </button>
    )
}

export default CoolButton