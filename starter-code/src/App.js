import React, { Component } from 'react';
import Signup from "../components/Signup";
import Message from "../components/Message";

class App extends Component {
  render(){
    return (
      <div>
        <div className="container"> 
          <Signup/>
          <Message isInfo title="Hello World">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
          </Message>
        </div>
      </div>
     );
  }
}

export default App