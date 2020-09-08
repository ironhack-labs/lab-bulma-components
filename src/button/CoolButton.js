import React, { PureComponent } from 'react';
import 'bulma/css/bulma.css';


function CoolButton() {
    return(
        <div>
            <button class="button is-rounded my-class is-danger is-small">Login</button>
            <button class="button is-small is-success">Signup</button>      
        </div>  
    )
}


export default CoolButton;
