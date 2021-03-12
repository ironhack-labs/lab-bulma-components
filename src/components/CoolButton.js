import React from 'react';
import 'bulma/css/bulma.css';

const Coolbutton = (props) => {
    const {className, submit} = props;
    return (
        <div>
            <button className={className}>{submit}</button>
        </div>
    )
}

export default Coolbutton;