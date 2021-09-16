import React from 'react';
import 'bulma/css/bulma.min.css';

const Container = (props) => {
    return (
        <div className="container">{props.children}</div>
    )
}

export default Container;