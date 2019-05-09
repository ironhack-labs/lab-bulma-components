import React from 'react';

let info = {
    isSuccess : 'is-success',
    isDanger : 'is-danger',
}

function CoolButton(props) {
  if(props.isDanger){
      return (
        <button className={`button ${props.className} ${info.isDanger} is-small`}>{props.name}</button>    
      );      
  }
  return (
    <button className={`button ${info.isSuccess} is-small`}>{props.name}</button>    
  ); 
}

export default CoolButton;