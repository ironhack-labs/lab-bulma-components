import React from 'react';
import Navbar from './navbar';
import FormField from './form-field';
import CoolButton from './cool-button';
import Message from './message';

const Signup = () => <div>
    <Navbar />
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <FormField label="Password" type="password" placeholder="e.g. abcd" />

    <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
    </Message>
    
    <CoolButton isSmall isSuccess>signup</CoolButton>
</div>


export default Signup;