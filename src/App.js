import React from 'react';
import Signup from './signup/Signup';
import Message from './message/Message';

const App = () => {
  return (
    <div>
      <Signup />
      <Message isInfo title='Hello World'>
        Lorem ip sum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  );
};

export default App;
