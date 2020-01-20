import React from 'react';

export const Text = ({label, text, placeholder}) => {
  return (
    <div className="field">
      <label htmlFor={label}></label>
      <div className="control">
        <input className="input" type="text" placeholder=""/>
      </div>
    </div>
  )
}

export const Email = ({...props}) => {
  
}