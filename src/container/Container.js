import React from 'react'
import 'bulma/css/bulma.css';

export const Container = props => {
    return ( 
        <div className="container">{props.children}</div>
    )
}

export default Container;