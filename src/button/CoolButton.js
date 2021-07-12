import React from 'react';

function CoolButton(props) {
    return (
        <div>
            <button className={`${props.className}`}>{`${props.text}`}</button>
        </div>
    )
};

export {CoolButton};