import React, { Component } from 'react';
import 'bulma/css/bulma.css';

const CoolButton = (props) => {
  return(

   <button className={props.className}>{props.children}</button>

  )}

export default CoolButton;