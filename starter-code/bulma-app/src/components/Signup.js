import React from 'react';
import Nav from './Nav';
import Formfield from './Formfield';
import Coolbutton from './Coolbutton';

export default function Signup() {
    return (
        <div>
            <Nav/>
            <Formfield type='text' label='Name' placeholder='Enter your name'/>
            <Formfield type='email' label='Email' placeholder='Enter your email'/>
            <Formfield type='password' label='Password' placeholder='Enter your password'/>
            <Coolbutton isSmall='is-small' isSuccess='is-success'>Submit</Coolbutton>
        </div>
    )
}
