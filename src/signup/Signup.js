import React from 'react';
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/Formfield";
import CoolButton from "../coolbutton/Coolbutton";
import Container from "../container/Container"
import 'bulma/css/bulma.css';


const SignUp = () => {
    return (
        <div>
    <Navbar />
<form>
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <FormField label="Password" type="password" placeholder="********" />
    <CoolButton label="SignUp" />
</form>
<div>
    <Container />
</div>
</div>
    )
}

export default SignUp;