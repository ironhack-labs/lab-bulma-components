import React from 'react';
import 'bulma/css/bulma.css';



function CoolButton (props) {
    return (
        <div>
        {
            props.isDanger
            ?  <button className={`${props.className} button is-rounded my-class is-danger is-small`}>Sign Up</button>
            : null
        }
        {
            props.isSuccess
            ?  <button className={`${props.className} button is-small is-success`}>Log In</button>
            : null
        }
        </div>
        
    )
}

export default CoolButton;