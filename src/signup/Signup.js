import React from 'react';
import FormField from '../formfield/FormField'
import CoolButton from '../coolbutton/CoolButton'
import Message from '../message/Message';

function Signup() {
    return <div className="container pt-5">
        <FormField label='Email' placeholder='e.g. alexsmith@gmail.com' />
        <FormField label='Password' placeholder='******' />
        <CoolButton isLink btnText="Submit" />
        <Message/>
    </div>
}

export default Signup; 