import React, { Component } from 'react';
import '../coolButton/CoolButton.css'
import 'bulma/css/bulma.css';

function InsertButtons(props){
  // console.log(props)
  let {className} = props;
  //className = "InsertCoolButtons"+className //si quiero sumar un estilo de css a lo que ya no viene? y no hacerlo desde los props de la otra vista?
  console.log(className)
  return <button className={className}>{props.children}</button>
}

export default InsertButtons