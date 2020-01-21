import React from 'react' 
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

const Signup = () => {
    return(
        <div className="container">
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField label="Password" type="text" placeholder="******" />
        <CoolButton isSmall isDanger className="is-rounded my-class">Submit</CoolButton>
      </div>

    )
}

export default Signup;