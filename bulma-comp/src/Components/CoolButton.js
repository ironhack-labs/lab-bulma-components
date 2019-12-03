import React from 'react';

function CoolButton(props) {
    return (
        <>
        <button class={props.className}>{props.children}</button>
        </>
    )    
}
export default CoolButton