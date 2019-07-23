import React, { Component, Fragment } from 'react';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';
import Signup from './Signup';
import Message from './Message';


const Container = ({className}) => {
  return (
      <Fragment>
      <Navbar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
      <CoolButton isSmall isSuccess>Button 2</CoolButton>
{/* SIGN UP COMPONENT ------------------------- */}
      {/* <Signup/> */}
      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
    </Fragment>
  );
  }
export default Container;
