import React from 'react';
import Signup from './Signup';
import Message from './Message';

import 'bulma/css/bulma.css';

const App = () => {
  return (
    <main>
      <Signup />
      
      <Message className="message is-info" title='Hello World' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
      </main>
  )
};

export default App;
