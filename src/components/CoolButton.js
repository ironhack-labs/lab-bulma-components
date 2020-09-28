import React from 'react';
import '../components/CoolButton.css';
import 'bulma/css/bulma.css';


function CoolButton(props) {
    return (
        <div className="CoolButtons">
            <button className={props.className}>{props.children}</button>
        </div>
    );
}



export default CoolButton