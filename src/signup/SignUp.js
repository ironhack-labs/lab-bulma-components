import React from "react";
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from '.CoolButton';

const SignUp = () => {
  return (
<Navbar />

<FormField label="Name" type="text" placeholder="Alex Smith"/>
<FormField label="Email" type="email" />
<FormField label="Password" type="password" />

<CoolButton isSmall isDanger className="is-rounded my-class">Send</CoolButton>

  );
};
