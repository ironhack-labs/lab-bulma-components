import React from 'react';
import FormField from '../formfield/Formfield';
import CoolButton from '../CoolButton/CoolButton';
import Navbar from '../navbar/Navbar'

const Signup = props => {
    return (

<div>
<Navbar/>

<form>
<FormField label="Name" placeholder="e.g Alex Smith" type="text"/>
<FormField label="Email" placeholder="e.g. alexsmith@gmail.com" type="text"/>
<FormField label="Password" placeholder="e.g. alexsmith@gmail..com" type="password"/>
<CoolButton label="Signup" class="isSuccess isRounded"/>
</form>
</div>
    );
};

export default Signup;