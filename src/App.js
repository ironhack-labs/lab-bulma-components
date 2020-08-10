import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import CoolButton from './buttons/coolButton';
import Message from './message/Message';

const App = () => {
  return (
    <div>
  <Navbar />
  <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
  <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
  <FormField label="Password" type="password" placeholder="*****" />
  <CoolButton type = 'submit' className = 'is-dark' name = 'Submit'/>
  <Message isInfo title='Hello World'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
</Message>

  </div>
  )

};

export default App;
