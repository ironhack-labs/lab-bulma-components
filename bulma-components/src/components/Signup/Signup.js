import React from 'react';

import Navbar from '../Navbar/Navbar';
import FormField from '../FormField/FormField';
import CoolButton from '../UI/CoolButton/CoolButton';
import './Signp.css';

const signup = ({ createdAc }) => (
    <div>
        <Navbar />
        <h1 className='sign-header'>CREATE YOUR ACCOUNT:</h1>
        <form action="/" className='form-wrapper' onSubmit={ createdAc }>
            <FormField label="Name" type="text" placeholder="Enter your name." />
            <FormField label="Email" type="email" placeholder="Enter your email." />
            <FormField label="Password" type="password" placeholder="Enter your password." />
            <CoolButton isLarge isSuccess>SUBMIT</CoolButton>
        </form>
    </div>
);

export default signup;