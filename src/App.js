import React from "react";
import NavBar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolButton/CoolButton";
import "bulma/css/bulma.css";

const App = () => {
  return (
    <>
      <NavBar />
      <div style={{ width: "50%", margin: "1% 0" }}>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField label="Password" type="password" placeholder="Ag524Hqu" />
      </div>

      <CoolButton isSmall isDanger className="is-rounded my-class">
        Button 1
      </CoolButton>
      <CoolButton isSmall isSuccess>
        Button 2
      </CoolButton>
    </>
  );
};

export default App;
