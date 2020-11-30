import 'bulma/css/bulma.css'
import React from 'react';


const CoolButton = (props) => {
    return (
        <button className = {'button' + ' ' + props.className}>
        {props.children}
        </button>
    )
    
}

export default CoolButton;