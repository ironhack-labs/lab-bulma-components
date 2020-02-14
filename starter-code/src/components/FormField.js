import React from 'react'

const FormField = props => {
    return(
        <div style={props.styles} className="control">
        Name
        <input className="input is-hovered" type="text" placeholder="Hovered input" />
        Email 
        <input className="input" type="email" placeholder="Email" />
        <span className="icon is-small is-left">
          <i className="fas fa-envelope" />
        </span>
        <span className="icon is-small is-right">
          <i className="fas fa-check" />
        </span>
      </div>

     
    );
}

export default FormField;