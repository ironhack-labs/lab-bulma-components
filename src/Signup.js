import React from 'react';
import NavBar from './navbar/NavBar';
import FormField from './formfield/FormField'
import CoolButton from './button/CoolButton'

const Signup = () => {
    return (<div>
        <NavBar />
        <FormField label={'Name'} type={'text'} placeholder={'e.g Alex Smith'} />
        <FormField label={'Email'} type={'email'} placeholder={'e.g. alexsmith@gmail.com'} />
        <FormField label={'Password'} type={'text'} placeholder={'e.g. a mix of uppercase and lowercase letters, numbers and special characters'} />
        <CoolButton input={'Button 2'} class={'button is-primary is-success'} />
    </div>)
};
  
export default Signup;