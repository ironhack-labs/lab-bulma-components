import React from 'react';

function CoolButton1(props) {
    return (
        < >
            <button className="button is-rounded my-class is-danger is-small">{props.text}</button>
        </ >
    )
}

export default CoolButton1;