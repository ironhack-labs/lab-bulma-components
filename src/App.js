import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField'
import CoolButton from './coolbutton/CoolButton'
import 'bulma/css/bulma.css';
import SignUp from './signup/SignUp'


const App = () => {
  return <div>
    <Navbar />
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <SignUp />
  </div>;
};

export default App;
