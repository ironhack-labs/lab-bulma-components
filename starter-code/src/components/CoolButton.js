import React, { Component } from 'react';
//import 'bulma/css/bulma.css';

const CoolButton = (props) => {
  return(
    <div>
      <a className={props.className}>{props.children}</a>
    </div>
  )}

export default CoolButton;