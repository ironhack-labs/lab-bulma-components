import React from 'react';
import NavBar from './navbar/navBar';
import FormField from './formfield/formField';
import CoolButton from './coolbutton/coolButton';
import Message from './message/message';
import Container from './container/container';

const App = () => {
  return (
        <div>
          <NavBar/>
          <Container/>
          <Message/>
        </div>
  )
};

export default App;
