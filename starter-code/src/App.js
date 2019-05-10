import React from 'react';

// components
import NavBar from './NavBar.js';
import FormField from './FormField.js';
import CoolButton from './CoolButton.js';
import Signup from './Signup.js';
import Container from './Container.js';

function App(props) {
  return (
    <div>
      <Signup />
      <Container />
      {/* <NavBar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
      <CoolButton isSmall isSuccess>Button 2</CoolButton> */}
    </div>
  )
}

export default App;