import React from "react";

import NavBar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

<div>
  <NavBar />
  <FormField label="Name" type="text" placeholder="Write your name" />
  <FormField label="Email" type="email" placeholder="Write your email" />
  <FormField
    label="Password"
    type="password"
    placeholder="Write your password"
  />
  <CoolButton class="button is-small is-success" /> Submit </CoolButton>
</div>;

export default Signup;
