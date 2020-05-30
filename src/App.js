import React from 'react';
import 'bulma/css/bulma.css';
// import Navbar from './navbar/Navbar';
// import FormField from './formfield/FormField';
// import CoolButton from './CoolButton/CoolButton';
import Signup from './signup/Signup';

const App = () => {
  return (
    <div className="App">
    {/* <Navbar />
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /><br/>    
    <CoolButton isSmall isDanger className="is-rounded my-class" name="Button 1" /> */}
    <Signup />
    </div>
  )
};

export default App;
