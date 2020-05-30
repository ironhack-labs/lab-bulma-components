import React from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolbutton/CoolButton";
import Signup from "./signup/Signup";
import Container from "./container/Container";
import Message from "./message/Message";
import Iteration from "./iteration/Iteration";
import Title from "./title/Title"
import "bulma/css/bulma.css";
import "./App.css";
import { render } from "react-dom";

const App = () => {
  return (
    <Container>
      <Title />
      <Iteration iterationNumber={1}>
        <Navbar />
      </Iteration>

      <Iteration iterationNumber={2}>
        <FormField
          label="Name"
          type="text"
          placeholder="e.g Alex Jonathan Smith"
        />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
      </Iteration>

      <Iteration iterationNumber={3}>
        <CoolButton isSmall isDanger isRounded>
          Button 1
        </CoolButton>
        <CoolButton isSmall isSuccess>
          Button 2
        </CoolButton>
      </Iteration>

      <Iteration iterationNumber={4}>
        <Signup />
      </Iteration>

      <Iteration iterationNumber={5}>
        <Message isInfo title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>.
        </Message>
      </Iteration>

    </Container>
  );
};

export default App;
