import 'bulma/css/bulma.css';
import '../coolbutton/CoolButton.css';
import React from 'react';

function CoolButton(props) {
    let classes = 'button';
    if(props.isPrimary) {
        classes += ' is-primary';
    } 
    if(props.isDanger) {
        classes += ' is-danger'
    }

    return (
        <button className={classes}>{props.name}</button>
    );
}

export {CoolButton};