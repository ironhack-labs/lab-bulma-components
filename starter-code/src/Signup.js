import React from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";
import Message from "./Message";
import Container from "./Container";

class Signup extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Navbar />
          <FormField label="Name" type="text" placeholder="e.g. Alex Smith" />
          <FormField
            label="Email"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
          />
          <FormField label="Password" type="password" placeholder="" />
          <CoolButton isSmall isDanger className="is-rounded my-class">
            Button 1
          </CoolButton>
          <CoolButton isSmall isSuccess>
            Button 2
          </CoolButton>
          <Container>
            <Message isInfo title="Hello World">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>.
            </Message>
          </Container>
        </Container>
      </div>
    );
  }
}

export default Signup;
