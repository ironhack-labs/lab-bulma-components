import React from 'react';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../button/CoolButton';
import 'bulma/css/bulma.css';

function Signup() {
    return (
        <div>
            <Navbar />

            <div className="Form">
                <FormField myLabel="Name" myType="text" myPlaceholder="e.g Alex Smith" />
                <FormField myLabel="Email" myType="email" myPlaceholder="e.g. alexsmith@gmail.com" />
                <FormField myLabel="Password" myType="pasword" myPlaceholder="********" />
            </div>

            <CoolButton className="is-rounded my-class" isSmall isDanger>Submit</CoolButton>
        </div>
    );
}

export default Signup;