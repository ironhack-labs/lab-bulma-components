import React from 'react'
import './CoolButton.css'

const CoolButton = props => {
    return (
      <div className='control'>      
        <button className = {['button', props.size, props.color, props.round, props.myClass].join(' ')}>{props.name}</button> 
      </div>
    );
  };


export default CoolButton