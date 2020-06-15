import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import CoolButton from './coolbutton/CoolButton';
import Signup from './signup/Signup';
import 'bulma/css/bulma.css';

function App() {
  return (<div>
    <Navbar />
    <FormField label={"Name"} type={"text"} placeholder={"e.g Alex Smith"} />
    <FormField label={"Email"} type={"email"} placeholder={"e.g. alexsmith@gmail.com"} />
    {/* <Signup></Signup> */}
  </div>);
};

export default App;
