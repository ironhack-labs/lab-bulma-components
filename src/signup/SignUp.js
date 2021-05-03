import React from "react";
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';
import "bulma/css/bulma.css";
import './SignUp.css';

const SignUp = () => {
    return (
        <main>
            <Navbar/>
            <div className="form-container">
                <form>
                    <FormField label="Name" type="text" placeholder="Jane" />
                    <FormField label="Email" type="email" placeholder="jane@email.com" />
                    <FormField label="Password" type="password" placeholder="**********" />

                    <CoolButton isSuccess className="is-rounded" name="Log in"></CoolButton>

                </form>
            </div>
        </main>
    )
};

export default SignUp;