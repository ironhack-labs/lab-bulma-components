import React from 'react'
import './CoolButton.css'
import 'bulma/css/bulma.css';

const Coolbutton = (props) => {
    return (
      <div className='Coolbutton'>
          <button class={props.class} type={props.type}> {props.value} </button>
      </div>
    );
  };

export default Coolbutton;