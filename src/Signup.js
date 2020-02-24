import React from 'react';
import Nav from "./Nav";
import FormField from "./FormField";
import CoolButton2 from './CoolButton2'

function Signup() {
    return (
        <div>
            <Nav />
            <FormField labelName="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField
                labelEmail="Email"
                type="email"
                placeholder2="e.g. alexsmith@gmail.com"
            />

            <FormField label="Password" type="password" />

            <CoolButton2 className="button is-small is-success" text="Sign up"></CoolButton2>

        </div>

    )
}
export default Signup;