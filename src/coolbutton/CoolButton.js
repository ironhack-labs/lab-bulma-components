import React from 'react';
import 'bulma/css/bulma.css';



function CoolButton(props) {
  return (
    /*<button className={`button ${props.isDanger ? 'is-danger': ''} ${props.isSmall ? 'is-small': ''} ${props.isSuccess ? 'is-success': ''} ${props.isInfo ? 'is-info':''}`}>{props.children}</button>
  );*/
    <button className={`button ${props.cname}`}>{props.children}</button>
  );
};

export default CoolButton;