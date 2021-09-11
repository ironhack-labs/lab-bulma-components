import React from "react";
import "bulma/css/bulma.css";
import CoolButton from "../coolbutton/CoolButton";
import Navbar from "../navbar/Navbar.js";
import FormField from "../formfield/FormField.js";

class Signup extends React.Component {
    render() {
        return (
          <div className="sign-up">
            <Navbar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField
              label="Email"
              type="email"
              placeholder="e.g. alexsmith@gmail.com"
            />
            <CoolButton isSmall isDanger className="is-rounded my-class">
              Submit
            </CoolButton>
          </div>
        );
    }
}

export default Signup