import "bulma/css/bulma.css";
import React from "react";
import ReactDOM from "react-dom";
import FormField from "./App.js";
import Navbar from "./Navbar.js";

// functional component

const Layout = (
  <div>
    <Navbar />
    <FormField type="text" placeholder="Alexander Doe">
      Name
    </FormField>
    <FormField type="email" placeholder="alex@gms.de">
      E-Mail
    </FormField>
    <FormField type="password" placeholder="password">
      Password
    </FormField>
  </div>
);

ReactDOM.render(Layout, document.getElementById("root"));
