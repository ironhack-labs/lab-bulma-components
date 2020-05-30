import React from "react";
import "bulma/css/bulma.css";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../CoolButton/CoolButton";


function Signup(props) {
    return(
        <div>
            <div>
                <Navbar />
            </div>

            <div>
                <form class="column is-8" action="/" method="get">
                <FormField
                    field="field"
                    control="control"
                    input="input is-primary"
                    label="Name"
                    type="text"
                    placeholder="John Doe"
                >
                    Name
                </FormField>
                <FormField
                    field="field"
                    control="control"
                    input="input is-primary"
                    label="Email"
                    type="email"
                    placeholder="email@email.com"
                >
                    Email
                </FormField>
                <FormField
                    field="field"
                    control="control"
                    input="input is-primary"
                    label="Password"
                    type="password"
                    placeholder="********"
                >
                    Password
                </FormField>
                <CoolButton class="button is-primary" type="submit">
                    SUBMIT
                </CoolButton>
                </form>
                </div>
            </div>
    );
}

export default Signup