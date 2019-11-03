
import React from 'react';
import FormField from './FormField';
import Navbar from './Navbar';
import CoolButton from './CoolButton';

const Signup = (props) => {


    return (
        <div>
            <Navbar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <CoolButton  btnArray={['is-rounded', 'my-class', 'is-danger', 'is-small']} child="Submit" className="my-class"></CoolButton>
        
        </div>
    )
}

export default Signup;