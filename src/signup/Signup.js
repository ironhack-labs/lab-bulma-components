import React from 'react';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';
import Message from '../message/Message';

const Signup = () => {
  return (
    <>
      <Navbar />
      <Message isInfo title='Hello World'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
      <FormField
        label='Name'
        type='text'
        placeholder='Enter your name'
      />
      <FormField
        label='Email'
        type='email'
        placeholder='Enter your email'
      />
      <FormField
        label='Password'
        type='password'
        placeholder='Enter your password'
      />
      <CoolButton isPrimary isOutlined>Submit</CoolButton>
    </>
  )
}

export default Signup;
