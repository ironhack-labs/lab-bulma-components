import React from 'react';

let shape = {
    isSuccess : 'is-success',
    isDanger : 'is-danger',
    
}

function CoolButton(props) {
  if(props.isDanger){
      return (
        <button class={`button ${props.className} ${shape.isDanger} is-small`}>{props.name}</button>    
      );      
  }
  return (
    <button class={`button ${shape.isSuccess} is-small`}>{props.name}</button>    
  ); 
  
    
}

export default CoolButton;