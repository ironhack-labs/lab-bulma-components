import React from "react";
import FormField from "./FormField";
import CoolButton from "./CoolButton";
import Navbar from "./Navbar";

const Signup = () => {
    return (
        <div>
          <Navbar/>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField label="Password" type="password" placeholder="password" />
          <CoolButton className="button is-rounded is-danger" name="Submit"/>
        </div>
    );
}

export default Signup;