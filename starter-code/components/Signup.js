import React from "react";
import CoolButton from "./CoolButton";
import FormField from "./FormField";

const signup = (props) => {
    return (
        <div>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="*****" />
            <CoolButton className="button is-rounded my-class is-danger is-small" buttonName="Submit"></CoolButton>
        </div>
    )
}

export default signup;