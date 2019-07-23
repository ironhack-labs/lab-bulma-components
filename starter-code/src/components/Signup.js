import React, {Fragment} from 'react';
import CoolButton from './CoolButton';
import FormField from './FormField';
import Navbar from './Navbar';

const Signup = (props) => {
  return (
    <Fragment>
      <Navbar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
      <FormField label="Password" type="text" placeholder="*****" />

      <CoolButton isHovered isCentered isPrimary>Login</CoolButton>
    </Fragment>
    );
  }
  
  export default Signup;