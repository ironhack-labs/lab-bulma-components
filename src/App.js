import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import Signup from './signup/Signup';
import Message from './message/Message';

const App = () => {
  return (
    <>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <Signup />
      <Message style="is-info" title="Hello World" />
    </>
  );
};

export default App;
