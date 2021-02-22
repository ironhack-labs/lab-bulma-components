import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import SignUp from './signup/Signup';

const App = () => {
  return <div>
  <Navbar />
  <FormField label="Name" type="text" placeholder="Alex Smith" />
  <FormField label="Email" type="email" placeholder="alexsmith@gmail.com" />
  <br />
  <br />
  <br />
  <br />
  <SignUp />
  </div>
};
export default App;

/*
<CoolButton />
*/