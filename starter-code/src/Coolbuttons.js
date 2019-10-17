import React, { Component } from "react";
import 'bulma/css/bulma.css';

function Coolbuttons(props) {
  return <div>
    <button className="button is-rounded my-class is-danger is-small">{props.one}</button>
    <button className="button is-rounded my-class is-danger is-small">{props.two}</button>
  </div >
}

export default Coolbuttons;