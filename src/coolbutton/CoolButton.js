import './CoolButton.css'
import 'bulma/css/bulma.css';
import React from "react";

const CoolButton = (props) => {
    return (
        <div className='div-cool-button'>
            <button class="button is-info">Login</button>
            <button class="button is-small is-success">SingUp</button>    
        </div>    
    );
  };

  export default CoolButton; 