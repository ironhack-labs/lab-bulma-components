import React from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolButton/CoolButton";
import Signup from "./signup/Signup";
import Message from "./message/Message";
import Container from "./container/Container";
import "bulma/css/bulma.css";

const App = () => {
  return (
    <div className="App">
      <Signup></Signup>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />

      <CoolButton className="button is-rounded my-class is-small is-danger">
        Button 1
      </CoolButton>
      <CoolButton className="button  is-small is-success">Button 2</CoolButton>
      <Container className="is-info" title="Hello World">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <strong>Pellentesque risus mi</strong>.
    </Container>
    </div>
  );
};

export default App;
