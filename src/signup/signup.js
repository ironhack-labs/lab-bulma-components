import React from 'react';
import FormField from '../formField/formField';
import CoolButton from '../coolbutton/coolButton';

const Signup = () => {
    return(
        <div className="form">
            <img id="form-logo" src="public/image/bulma-logo.png"/>
            <FormField label="Name" placeholder="e.g Alex Smith" type="text"/>
            <FormField label="Email" placeholder="e.g. alexsmith@gmail.com" type="text"/>
            <FormField label="Password" placeholder="e.g. alexsmith@gmail..com" type="password"/>
            <div id="buttons">
                <CoolButton cta="Signup"  isRounded isPrimary isDanger/>
                <CoolButton cta="Login" isSuccess isRounded/>
            </div>
        </div>
    );
};

export default Signup;