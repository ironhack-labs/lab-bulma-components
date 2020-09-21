import React, {Fragment} from 'react';
import Message from '../message';
import FormField from '../formfield';
import CoolButton from '../CoolButton'

const Signup = () => {
  return (
    <Fragment>
      <Message isInfo title='Hello World'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" placeholder="e.g. 12345678 (Just kidding!)" />
      <CoolButton className="button is-primary">Submit</CoolButton>
    </Fragment>
  );
};

export default Signup;