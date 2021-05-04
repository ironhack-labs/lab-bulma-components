import React from 'react';
import Navbar from '../Navbar/Navbar';
import FormField from '../FormField/FormField';
import CoolButton from '../CoolButton/CoolButton';

const Signup = () => {
    return (
        <div>
            <Navbar />
            <section className="container column is-one-third">
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <CoolButton isPrimary isLarge>Submit</CoolButton>
            </section>
        </div>
        
    );
};

export default Signup;