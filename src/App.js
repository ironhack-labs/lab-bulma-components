import React from 'react';
import CoolButton from './CoolButton/CoolButton';
import FormField from './formfield/Formfield';
import Navbar from './navbar/Navbar';
import Signup from './Signup/Signup';


const App = () => {
  return (
    <div>
      {/* <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> 
        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
        <CoolButton isSmall isSuccess>Button 2</CoolButton>
      </div> */}

      <div>
      <Signup />
      </div>
    </div>
  )
};

export default App;
