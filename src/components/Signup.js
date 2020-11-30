import React from 'react';
import 'bulma/css/bulma.css';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';



const Signup = (props) => {
    return (
        <form className="Signup">
            <FormField label="Name:" type="name" placeholder="Name" />
            <FormField label="E-mail:" type="email" placeholder="E-amil" />
            <FormField label="Password:" type="password" placeholder="Password" />
            <CoolButton isPrimary text="Sign Up"></CoolButton>
        </form>
    );
  };

export default Signup;