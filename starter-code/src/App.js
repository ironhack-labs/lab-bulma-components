import React from 'react';
import SignUp from './components/SignUp'
import Message from './components/Message'


function App() {
  return (
    <div class='container'>
      <SignUp></SignUp>
      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>

    </div>
  );
}

export default App;
