import React from 'react';

import './Signup.css';

import Navbar from '../navbar/Navbar';
import FormField from '../formField/FormField';
import CoolButton from '../coolButton/CoolButton';

const SignUp = () => {
    return (
        <main>
            <Navbar/>
            <div className="form-container">
                <form>
                    <FormField label="Name" type="text" placeholder="Jane" />
                    <FormField label="Email" type="email" placeholder="jane@email.com" />
                    <FormField label="Password" type="password" placeholder="**********" />

                    <CoolButton isSuccess className="is-rounded">Log in</CoolButton>

                </form>
            </div>
        </main>
    )
}

export default SignUp;