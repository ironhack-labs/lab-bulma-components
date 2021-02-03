import React from "react";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";
import Message from "../message/Message";
import Container from "../container/Container";

const Signup = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="container is-flex-direction-column">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField label="Pasword" type="password" placeholder="Pasword" />
        <CoolButton text="Submit" class="is-link mt-1 ml-4"></CoolButton>
      </div>

      <Message
        title="Hello World"
        regularText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        strongText="Pellentesque risus mi"
      ></Message>
    </div>
  );
};

export default Signup;
