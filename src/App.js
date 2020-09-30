import React from "react";
import Navbar from "./components/Navbar";
import FormField from "./components/FormField";
import CoolButton from "./components/CoolButton";
import Message from "./components/Message";
import Container from "./components/Container";
// import Signup from "./components/Signup";

import "bulma/css/bulma.css";
import "../public/index.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Container className="mx-5 mb-3 px-5">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />

        <div className="button-group inline m-2">
          <CoolButton isSmall isDanger className="is-rounded my-class">
            Button 1
          </CoolButton>
          <CoolButton isSmall isSuccess>
            Button 2
          </CoolButton>
        </div>
      </Container>
      <Container className="mx-5 mt-5 px-5">
        <Message isInfo title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>.
        </Message>
      </Container>
      {/* <Container  className="mx-5 px-5">
      <Signup />
      </Container> */}
    </div>
  );
};

export default App;
