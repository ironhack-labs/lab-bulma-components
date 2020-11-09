import React from 'react'
import 'bulma/css/bulma.css';

const CoolButton = (props)=>{
    return <button className={`button ${props.isSmall} ${props.isDanger} ${props.isPrimary} ${props.isSuccess}`}>
        {props.children}
    </button>
}

export default CoolButton