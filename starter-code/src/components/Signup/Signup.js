import React from "react";
import "../FormField/FormField.js"
import FormField from "../FormField/FormField.js";

import "../Navbar/Navbar.js"
import Navbar from "../Navbar/Navbar.js";
// import "./Navbar.css";
class Signup extends React.Component {
  render() {
    return (
      <div>

        <Navbar/>
        <FormField />
        
      </div>
    );
  }
}
export default Signup;