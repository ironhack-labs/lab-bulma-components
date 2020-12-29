import React from 'react';

import 'bulma/css/bulma.css';

import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../button/CoolButton';


function Signup() {

    return (
        <div>

            <Navbar />

            <div className="Form">
                <FormField myLabel="Name" myType="text" myPlaceholder="e.g Alex Smith" />
                <FormField myLabel="Email" myType="email" myPlaceholder="e.g. alexsmith@gmail.com" />
                <FormField myLabel="Password" myType="pasword" myPlaceholder="********" />
            </div>

            <CoolButton className="my-class" isSmall={true} isDanger={true} isRounded={true} >Submit</CoolButton>



        </div>
    );
};

export default Signup;