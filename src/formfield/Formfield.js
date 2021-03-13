import 'bulma/css/bulma.css';
import React from 'react'


const FormField = props => {
    return (
        <>
          <form action="login"> 
        <div className="field">
      
        <label className="name">{props.label}</label>
        <div className="control">
          <input className="input" type="text" placeholder="e.g Alex Smith" />
        </div>
      </div>
      <div className="field">
        <label className="email">{props.label}</label>
        <div className="control">
          <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </div>
      </div>
      <button class="button is-rounded my-class is-danger isSelected isText is-small">SignUp</button>
        </form>
      </>
    );
  };

  export default FormField 
