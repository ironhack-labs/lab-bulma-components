import React from "react";
import CoolButton from "./CoolButton";
import FormField from "./FormField";

function Navbar(props) {
    return <div>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Password" type="password" placeholder="**********" />
                <CoolButton text="Signup"/>
            </div>
}

export default Navbar;