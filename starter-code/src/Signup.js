import React from 'react';
import Navbar from './Navbar'
import FormField from './FormField'
import CoolButton from './CoolButton'

function Signup() {
    return (
        <div className='App'>
        <Navbar />
          <h1>Lab Bulma Components</h1>
          <br/>
          <FormField/>
          <CoolButton isSmall isDanger isRounded>Button 1</CoolButton>
          <CoolButton isSmall isSuccess>Button 2</CoolButton>
          </div>
      );
}

export default Signup;