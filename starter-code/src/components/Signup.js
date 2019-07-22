import React, { Fragment } from 'react';
import FormField from './FormField';

const Signup = () => {
  return (
    <Fragment>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    </Fragment>
  );
}


export default Signup;
