import React, { Component } from 'react';
//import 'bulma/css/bulma.css';

const CoolButton = (props) => {
  return(

   <a className={props.className}>{props.children}</a>

  )}

export default CoolButton;