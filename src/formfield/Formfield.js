import React from "react";
import 'bulma/css/bulma.css';


    
    const Formfield = props => {
        return (
          <div className='field'>
            <label className='label'>{props.label}</label>
            <input type="text" placeholder={props.placeholder}></input>
        
          </div>
        );
      };



export default Formfield;