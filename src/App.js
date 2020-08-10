import React from 'react';
import 'bulma/css/bulma.css'
import Navbar from './navbar/Navbar'
import Signup from './signup/Signup';
import Message from './message/Message'

const App = () => {
  return <div className="App">
    <Navbar />
    <Signup />
    <hr></hr>
    <Message isInfo title='Hello World'>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
    </Message>
  </div>
};

export default App;
