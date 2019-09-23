import React from 'react';
import Navbar from './Navbar';
import CoolButton from './CoolButton';
import FormField from './FormField';

const Signup = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="text"  />
            <CoolButton label="Submit" className="button is-small is-success"/>
        </React.Fragment>
    );
};

export default Signup
