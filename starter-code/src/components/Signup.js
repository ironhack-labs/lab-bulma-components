import React, {Fragment} from 'react';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';

const Signup = () => {
  return (
    <Fragment>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" placeholder="Password" />
      <CoolButton isSuccess>Submit</CoolButton>
    </Fragment>
  );
}

export default Signup;