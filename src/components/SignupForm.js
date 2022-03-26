import "bulma/css/bulma.css";
import react from "react";
import FormField from "./FormField";


const SignupForm = () => {
    return (

    <form>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="Password" />
        <button type="submit">Sign me up</button>
    </form>


    )
}


export default SignupForm;