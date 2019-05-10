import React from 'react'; 

// components
import NavBar from './NavBar.js';
import FormField from './FormField.js';
import CoolButton from './CoolButton.js';

function Signup(props) {
  return (
    <div>
      <NavBar />
      <form>
        <FormField label="name" type="text" placeholder="Fedde" />
        <FormField label="email" type="email" placeholder="F@email.com" />
        <FormField label="password" type="password" placeholder="A#F(AI3faio" />
        <CoolButton isSuccess>Submit</CoolButton>
      </form>
    </div>
  )
}

export default Signup;