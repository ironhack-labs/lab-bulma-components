import React from 'react';
import Navbar from "../navbar/Navbar"
import Formfield from "../formfield/Formfield.js";
import CoolButton from "../coolbutton/CoolButton.js";

const SignUp = () => {
    return <div className="Signup"> 
<Navbar />

    <Formfield label="Name" type="text" placeholder="e.g. Smith" />
    <Formfield label="Email" type="email" placeholder="smith@gmail.com" />
    <Formfield label ="Password" type="password" placeholder= "****" />
<CoolButton className="is-primary">Submit</CoolButton>
</div>
}

export default SignUp;