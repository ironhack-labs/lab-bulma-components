import React from "react";
import "../Navbar/Navbar.css";
import Formfield from "../Formfield/Formfield.js";
import "../Formfield/Formfield.js";

class Signup extends React.Component {
    render() {
      return (
        <div class="signup-container">
        <Navbar/>
        <Formfield label="Name" type="text" placeholder="e.g. Alex Smith" />
        <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <Formfield label="Password" type="password" placeholder="*****" />
        <Button isSmall isLarge isDanger is-link className="is-rounded my-class">Submit</Button>
        </div>
      );
      }
    }
  
  export default Signup;