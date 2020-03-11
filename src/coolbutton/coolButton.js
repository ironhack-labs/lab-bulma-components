import React from 'react';

const CoolButton = props => {
    return (
        <>
            <button class={props.classes}>{props.cta}</button>
        </>
    );
};

export default CoolButton;