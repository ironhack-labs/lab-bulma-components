import React from 'react';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';

const Signup = () => (
    <div className='Signup'>
        <Navbar>
            <CoolButton button='is-info'>Login</CoolButton>
            <CoolButton button='is-primary'>Signup</CoolButton>
        </Navbar>
        <div className='form'>
            <div className='form-fields'>
                <FormField label='Name' type='text' placeholder='e.g Alex Smith'/>
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label='Password' type='password' placeholder='Insert your Password'/>         
            </div>
            <CoolButton button='is-success'>Signup</CoolButton>
        </div>
    </div>
)

export default Signup;