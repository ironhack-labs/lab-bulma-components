import React from 'react';
import 'bulma/css/bulma.css';
import './CoolButton.css';

function coolbutton (props) {
  const { buttonName, buttonClass } = props;
  return (
    <div className="two-buttons">
      <button class={ buttonClass }>{ buttonName }</button>
    </div>
  )
}

export default coolbutton;