import React from 'react';
import 'bulma/css/bulma.css';
import './CoolButton.css';

function coolbutton (props) {
  const { button1, button2 } = props;
  return (
    <div className="two-buttons">
      <button class="button is-rounded my-class is-danger is-normal danger-button">{ button1 }</button>
      <button class="button is-normal is-success">{ button2 }</button>
    </div>
  )
}

export default coolbutton;