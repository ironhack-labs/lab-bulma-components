import React, { Component } from 'react';
import './App.css';

class State extends Component{

  state = { 
    message:'Not Ross'
  } 

  changeState = () => {

    this.setState({message:'Ross!'})

  }
  
render(){

return(

<div className="state-changer">
<button onClick={this.changeState}>change</button>
{this.state.message}
</div>
     );
   }
}

export default State;