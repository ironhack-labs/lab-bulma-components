import React from "react";
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../CoolButton/CoolButton';

function Signup (props) {
    return (
        <div className="Signup">
            <Navbar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="passwor" placeholder="********" /><br/> 
            <CoolButton isSmall className="is-rounded my-class" name="Sign-up" />
       </div>
);
};

export default Signup; 