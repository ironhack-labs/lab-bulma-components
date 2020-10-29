import React from 'react';

import Navbar from "../Navbar/Navbar";
import Formfield from "../Formfield/Formfield";
import CoolButton from "../CoolButton/CoolButton";
import Message from "../Message/Message";

const Signup = () => {

    return(
    <div>
      <Navbar />

    <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
    <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <Formfield label="Password" type="password" placeholder="Type your password" />

    <CoolButton isActive isLarge isPrimary isRounded>Signup</CoolButton>
    <Message header="Hello" body="This is the Signup page" isPrimary />

    </div>
    );
    };


export default Signup;