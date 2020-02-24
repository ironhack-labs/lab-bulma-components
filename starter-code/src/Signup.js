import React from "react";
import Navbar from "./navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

function Signup(props) {
  return ( <div className="Signup">
<Navbar></Navbar>
<FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
<FormField label="Email" type="text" placeholder="alex@gmail.com"/>
<FormField label="Password" type="text" placeholder="******"/>
<CoolButton isSmall isSuccess>Submit</CoolButton>
</div>);
}

export default Signup;
