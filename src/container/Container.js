import 'bulma/css/bulma.css';
import React from 'react';

function Container(props) {
    return(
        <div className='container'>{props.children}</div>
    )
}

export {Container};
