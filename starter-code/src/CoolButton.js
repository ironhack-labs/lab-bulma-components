import React from 'react';

function CoolButton(props) {
  // needs button class + additional provided
  var buttonClasses = 'button';
  if(props.className) {buttonClasses += ` ${props.className}`}
  if(props.isDanger) {buttonClasses += ` is-danger`}
  if(props.isSmall) {buttonClasses += ` is-small`}
  if(props.isSuccess) {buttonClasses += ` is-success`}
  
  return (
    <button className={buttonClasses}>
    {props.children}
    </button>
  )
}

export default CoolButton;