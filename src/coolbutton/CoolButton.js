import React from 'react';
import 'bulma/css/bulma.css';
import './CoolButton.css'

const CoolButton = (props) =>{
    console.log(props)
    return (
        <div>            
            <button  className={`button ${props.className} ${props.isDanger && 'is-danger'} ${props.isSmall && 'is-small'} ${props.isSuccess && 'is-success'} ${props.isLight && 'is-light'} ${props.isPrimary && 'is-primary'}`} >{props.children}</button>
        </div>
    )
}

export default CoolButton