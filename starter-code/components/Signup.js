import React from 'react';

import Navbar from "./Navbar";

import FormField from "./FormField";

import CoolButton from "./CoolButton";

function Signup() {
  let obj = {
    name1 : 'Button1',
    name2 : 'Submit',
} 
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" />      
      {/* <CoolButton isSmall isDanger className="is-rounded my-class" name={obj.name1} /> */}
      <CoolButton isSmall isSuccess name={obj.name2} />
    </div>
  );
}

export default Signup;
