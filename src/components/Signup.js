import React from 'react'
import FormField from '../formfield/FormField';
import Navbar from '../components/Navbar';
import CoolButton from '../components/CoolButton';

const SignUp = props => {
    return (
        <div>
        <Navbar/>
        <FormField
        label="Name"
        type="text"
        placeholder="Name"
        />
         <FormField
        label="E-mail"
        type="text"
        placeholder="E-mail"
        />
         <FormField
        label="Password"
        type="text"
        placeholder="Password"
        />
        <CoolButton className="button is-small is-success" label="submit"/>
        </div>   
    );
  };


  export default SignUp;