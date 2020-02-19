import React, { Component } from 'react'

function CoolButton (props){

  return (
    <button className={props.className} >{props.label}</button>
       )
}
export default CoolButton
