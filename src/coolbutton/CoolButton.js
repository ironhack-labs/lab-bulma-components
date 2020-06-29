import React from 'react';

const CoolButton = props => {
    return (
        <div>
            <button className = {props.className}>{props.name}</button>
        </div>
    );
};

export default CoolButton;