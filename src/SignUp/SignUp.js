import React from 'react';
import FormField from '../formfield/FormField';
import Navbar from '../navbar/Navbar';
import CoolButton from '../coolbutton/CoolButton';


const SignUp = () => {
    return (
    <div>
        <Navbar/>
        < FormField  label = "Name"  type = "text"  placeholder = "eg Alex Smith"  / > 
        < FormField  label = "Email"  type = "email"  placeholder = "eg alexsmith@gmail.com"  / >
        < FormField  label = "Password"  type = "password"  placeholder = "Enter password"  / > 
        <CoolButton  isSmall={'is-small'} isSuccess={'is-success'}>Submit</CoolButton>
        
    </div>
)
};



export default SignUp;
