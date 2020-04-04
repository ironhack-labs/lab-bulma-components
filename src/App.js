import React, { Component } from 'react';
import SignUpPage from './pages/SignUpPage';
import Message from './messages/Message';

class App extends Component {
  render(){
    return (
      <div className="App">
        <SignUpPage/>
        <Message isInfo title="This is a message">This is the text message</Message>
      </div>
    );
  }
};

export default App;
