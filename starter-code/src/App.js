import React, { Component } from "react";
import Signup from "./Signup/Signup";
import CoolButton from "./Button/CoolButton";
import Message from "./Message/message";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Signup></Signup>
        <div className="buttons">
        <CoolButton className='button is-rounded my-class is-danger is-small'>Button 1</CoolButton>
        <CoolButton className="button is-small is-success">Button 2</CoolButton>
        </div>
            <Message title='Hello world!'></Message>
      </div>
    );
  }
}

export default App;
