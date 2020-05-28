import React from "react";
import 'bulma/css/bulma.css';


    
    const Button = props => {
        return (
          <div className='field'>
            <button className={props.className}>{props.button}</button>
          </div>
        );
      };



export default Button;