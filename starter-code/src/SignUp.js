import React from "react";
import FormField from "./FormField.js"
import CoolButton from "./CoolButton.js"

function SignUp() {


return <div>
<FormField label="Name" type="name" placeholder="e.g. Susa"/>
<FormField label="Email" type="email" placeholder="susa@web.de"/>
<FormField label="Password" type="email"/>
<CoolButton first="Sign-up" sec="log-in"/>
</div>

}


export default SignUp