import React from "react";
import 'bulma/css/bulma.css';

function CoolButton() {
  return (
    <div>
      <button className="button is-rounded my-className is-danger is-small">Login</button>
      <button className="button is-small is-success">Signup</button>
    </div>    
  );
}

export default CoolButton;
