import React from "react";
import Navbar from "./navbar/Navbar.js";
import FormField from "./formfield/FormField.js";
import SignUp from "./signup/SignUp";
import "bulma/css/bulma.css";
import Container from "./container/Container.js";
import Message from "./message/Message.js";

const App = () => {
  return (
    <div>
      {/* <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      /> */}
      <SignUp />
      <Container />
      <Message isInfo title="Hello World">
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>.
        </p>
      </Message>
    </div>
  );
};

export default App;
