import React from 'react';
import CoolButton from '../coolbutton/CoolButton';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';

function Signup(props){

    return(

    <div>
        <Navbar/>
        <br></br>
        <FormField label="Name" type="text" placeholder="John Doe"></FormField>
        <FormField label="Email" type="email" placeholder="something@email.com"></FormField>
        <FormField label="Password" type="password" placeholder="Enter Password"></FormField>
        <CoolButton className="is-primary">Submit</CoolButton>
    </div>
    );
}

export default Signup; 