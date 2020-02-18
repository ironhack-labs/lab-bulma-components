import React from 'react';

const CoolButton = prop => {
    return (
        <button className={`button ${prop.className}`}>{prop.children}</button>
    )
};

export default CoolButton;
