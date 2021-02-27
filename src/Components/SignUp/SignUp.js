import React from "react";

import Navbar from './Navbar/Navbar'
import FormField from './FormField/FormField';
import CoolButton from './CoolButton/CoolButton';

function SignUp() {
    return <div>
        <Navbar />
        <FormField>
            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Password" />
                </div>
            </div>
        </FormField>
        <CoolButton />
    </div>
}

export default SignUp;