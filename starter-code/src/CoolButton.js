import React from 'react';

class CoolButton extends React.Component{
  render(){
    return(
    <div>
      <button class="button is-link is-outlined is-normal">Login</button>
      <button class="button is-link is-outlined">Signup</button>
    </div>
    )
  }
}

export default CoolButton;