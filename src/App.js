import React from "react";
import "bulma/css/bulma.css";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolbutton/CoolButton";
import Signup from "./signup/Signup";
import Message from "./message/Message";

const App = () => {
  return (
    <div>
      <Signup />

      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <strong>Pellentesque risus mi</strong>.
      </Message>

      {/* <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />

      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />

      <CoolButton className="button isSmall is-danger is-rounded my-class">
        Button 1
      </CoolButton>
      <CoolButton className="button isSmall is-success">Button 2</CoolButton> */}
    </div>
  );
};

export default App;
