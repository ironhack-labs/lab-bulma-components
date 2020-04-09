import React, { Component } from 'react';
import Navbar from './navbar/Navbar.js'
import FormField from './formField/FormField'
import CoolButton from './coolButton/CoolButton.js';
import SignUp from './signup/SignUp.js';
import Message from './messages/Message.js'
import 'bulma/css/bulma.css';


class App extends Component {
  render(){
    return (
      <div>
        <Navbar />
        <FormField />
        <CoolButton />
        <Message article="message is-info" className="message-header"> Lorem ipsum dolor sit amet, consecteturelit. <strong>Pellentesque risus mi</strong>,tempus quis placerat ut, porta nec nulla. </Message>
        <SignUp />
      </div>
    )
  }
}

export default App;
