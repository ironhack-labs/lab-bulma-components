import React from "react";
import Navbar from "./Navbar";
import CoolButton from "./CoolButton";
import FormField from "./FormField";
import Container from "./Container";
import Message from "./Message";

function Signup() {
  return (
    <div>
    <Navbar />
    <Container>
      <form>
        <FormField label="Name" type="text" placeholder="e.g. Alex Smith" />
        <FormField
          label="E-Mail"
          type="email"
          placeholder="e.g. alex@smith.com"
        />
        <FormField label="Password" type="password" />

        <CoolButton isPrimary type="submit">
          Submit
        </CoolButton>

        <Message isInfo title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>.
        </Message>
      </form>
      </Container>
    </div>
  );
}

export default Signup
