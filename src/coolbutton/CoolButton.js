import React from 'react';

function CoolButton(props) {
    return ( 
        <button className= {"button " + props.className}>{props.children}</button>

)}


export default CoolButton;