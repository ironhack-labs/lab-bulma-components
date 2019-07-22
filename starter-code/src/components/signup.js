import React from 'react';
import Navbar from './nav';
import FormField from './formField';
import CoolButton from './coolButton';
import Message from './message'

const SignUp = (props) => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password" placeholder="inser your password..." />
      <CoolButton isLarge isSuccess isHover isRounded isSelected>Submit!</CoolButton>
      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
        </Message>
    </div >
  )
}


export default SignUp;