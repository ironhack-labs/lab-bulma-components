import React from 'react';

import 'bulma/css/bulma.css';

import '../components/CoolButton.css';


const CoolButton = (props) => {
    return (
        <div className="CoolButtons">
            <button className={props.className}>{props.children}</button>
        </div>
    );
}



export default CoolButton