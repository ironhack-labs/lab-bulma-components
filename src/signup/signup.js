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
            <div class="buttons">
                <CoolButton cta="Signup" classes="button is-rounded is-primary is-danger"/>
                <CoolButton cta="Login" classes="button is-rounded is-success"/>
            </div>
        </div>
    );
};

export default Signup;