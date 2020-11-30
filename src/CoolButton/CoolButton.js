import React from 'react';
import 'bulma/css/bulma.css';


const Button = props => {
    return (
        <div className='Buttons'>
            <button className={props.class}>{props.name}</button>
        </div>
    )
}

export default Button