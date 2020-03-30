import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import CoolButton from './coolbutton/CoolButton'
import SignUp from './signup/SignUp';

const App = (data) => {
  return (
  <div>
    <Navbar />
    <FormField />
    <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
    <CoolButton isSmall isSuccess>Button 2</CoolButton>
    <SignUp></SignUp>
  </div>
  );
}

export default App;
