import 'bulma/css/bulma.css'
import React from 'react'



const Formfield = props => {
    return (
        <div className="Formfield">
            <label className="label">{props.label}</label>
                <input className={props.input} type="text" placeholder={props.placeholder} />
        </div>
    );
  };
  
  export default Formfield;
  