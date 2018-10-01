import React from "react";
import 'bulma/css/bulma.css';

export const Button = () => {
  return (
    <div style={{margin: "20px"}}>
      <button class="button is-rounded my-class is-danger is-small">Button 1</button>
      <button class="button is-small is-success">Button 2</button>
    </div>
  )
}