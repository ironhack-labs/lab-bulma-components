import React from "react";
import "bulma/css/bulma.css";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolbuttons/CoolButton";

const App = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <CoolButton className="button is-primary is-success">
        <strong>test</strong>
      </CoolButton>
      {/* <CoolButton className="is-Small is-Success">
        Button 2
      </CoolButton> */}
    </div>
  );
};

export default App;
