import React from 'react';
import 'bulma/css/bulma.css';
import './SignUp.css'

import Navbar from '../navbar/Navbar'
import FormField from '../formfield/FormField'
import CoolButton from '../coolbutton/CoolButton'

const SignUp = props => {
    return (
        <section>
            <Navbar />
            <h1>Sign up</h1>
            <form>
                <FormField label="Name" type="text" placeholder="e.g John Smith" />
                <FormField label="Email" type="email" placeholder="e.g. johnsmith@example.com" />
                <FormField label="Password" type="password" placeholder="******" />
                <CoolButton buttonType="submit" buttonText="Submit" isOutlined isRounded isSuccess />
            </form>
        </section>
    )
}

export default SignUp
