import React from 'react';
import 'bulma/css/bulma.css';
import {Signup} from './signup/Signup';
import {Message} from './message/Message';

const App = () => {
  return (
    <React.Fragment>
      <Signup />
      <Message isSuccess title='Hello World'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
    </React.Fragment>
  );
};

export default App;
