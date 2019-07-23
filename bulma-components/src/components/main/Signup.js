import React from "react";
import "../../App.css";
import "bulma/css/bulma.css";
import { directive } from "@babel/types";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

function Signup(props) {
  return (
    <div>
      <Navbar />
      <FormField />
      <CoolButton />
      <FormField />
      <CoolButton />
    </div>
  );
}

export default Signup;
