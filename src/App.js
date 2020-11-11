import React from "react";
import NavBar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolButton/CoolButton";
import "bulma/css/bulma.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <FormField label="Password" type="password" placeholder="Ag524Hqu" />

      <CoolButton
        isSmall="is-small "
        isDanger="is-danger"
        className="is-rounded my-class"
      >
        Button 1
      </CoolButton>
      <CoolButton isSmall="is-small " isSuccess="is-success">
        Button 2
      </CoolButton>
    </div>
  );
};

export default App;
