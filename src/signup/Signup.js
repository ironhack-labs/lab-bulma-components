import React from 'react'
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton'

const Signup = (data) => {
    return (
    <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Pasword" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton label="Submit" >Button 2</CoolButton>
    </div>
    );
  }

export default Signup