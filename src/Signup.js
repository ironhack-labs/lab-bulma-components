import React from "react";
import Formfield from "./formfield/Formfield";

import Navbar from "./navbar/Navbar";

export default function Signup() {
  return (
    <div>
      <Navbar />
    <form>
        <Formfield label="Name" type="text" placeholder="type in your name" />
        <Formfield label="Email" type="email" placeholder="type in your email" />
        <Formfield label="Password" type="paswword" placeholder="*******" />
    </form>
    </div>
  );
}
