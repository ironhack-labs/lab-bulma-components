import React from "react";

import Formfield from "../formfield/Formfield";
import CoolButton from "../coolbutton/CoolButton";
import Navbar from "../navbar/Navbar";

export default function Signup() {
  return (
    <div>
      <Navbar />
      <form className="is-flex is-flex-direction-column is-align-items-center">
        <Formfield label="Name" type="text" placeholder="Type your name" />
        <Formfield
          label="E-mail"
          type="email"
          placeholder="username@email.com"
        />
        <Formfield label="Password" type="password" placeholder="******" />
        <CoolButton isSuccess isRounded>
          Submit
        </CoolButton>
      </form>
    </div>
  );
}
