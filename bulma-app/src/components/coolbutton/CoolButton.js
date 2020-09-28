import React from 'react';

import 'bulma/css/bulma.css';

function CoolButton(props) {

    return (

        <button className={props.classes}>{props.text}</button>

    )
}

export default CoolButton;