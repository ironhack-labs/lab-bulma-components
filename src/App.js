import React from 'react';
import Nav from './navbar/Navbar'
import FormField from './formfield/FormField';
import CoolButton from './coolButton/CoolButton';
import Signup from './signup/Signup';

const App = () => {
  return (
    <div>
      {/* <Nav/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
      <CoolButton isSmall isSuccess>Button 2</CoolButton>  */}
      <Signup/>
    </div>
  )
};

export default App;
