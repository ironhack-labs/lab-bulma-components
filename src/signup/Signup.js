import React from 'react';
import FormField from "../formfield/Formfield";
import CoolButton from "../cool-button/CoolButton";
import 'bulma/css/bulma.css';
import './Signup.css';

const Signup = props => {
    return (
        <div className="Signup-form">
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <CoolButton isSmall isPrimary>Submit</CoolButton>
        </div>
    );

};

export default Signup;