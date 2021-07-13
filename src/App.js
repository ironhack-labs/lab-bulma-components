import React from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import SignUpPage from "./component/signuppage";

import "bulma/css/bulma.css";

const App = () => {
  return (
    <div>
      {/* <Navbar type={("is-primary", "is-success")} /> */}
      <FormField label={"Name"} placeholder={"e.g Alex Smith"} />
      <FormField label={"Email"} placeholder={"e.g. alexsmith@gmail.com"} />
      <SignUpPage props={Navbar} />
      <h1>Bulma</h1>
    </div>
  );
};

export default App;
