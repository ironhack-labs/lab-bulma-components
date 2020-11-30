import React from 'react';
import 'bulma/css/bulma.css';
import '../CoolButton/CoolButton.css';

const CoolButton = props => {
    return (
        // console.log(props)
        <div className='coolBTN'>
            <button className={props.className}>{props.children}</button>
        </div>
    )
}

export default CoolButton;