import React from "react";
import Navbar from "./NavBar";

import FormField from "./FormField";


class SignUp extends React.Component {
    render() {
        return (
            <div id="signup">
                <Navbar />
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            </div>

        );
    }
}

export default SignUp;


