import React, { Fragment } from 'react';

import FormField from '../formfield/FormField';
import Nav from '../navbar/Nav';
import CoolButton from '../coolbutton/CoolButton';

const Signup = () => 
    <>
        <Nav/>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="***********" />
        <CoolButton isActive isDanger>Send</CoolButton>
    </>

export default Signup