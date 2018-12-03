import React from "react";
import "./signup.css";
import Navbar from "../navbar/NavBar.js";
import FormField from "../formfield/FormField.js";
import CoolButton from "../coolbutton/CoolButton.js";

class Signup extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div id="signup" className="Signup">
        <Navbar />
        <form>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> <br/>
          <CoolButton isSmall isSuccess>Enviar</CoolButton>
        </form>

      </div>
    );
  }
}

export default Signup;