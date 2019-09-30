import React, { Fragment } from "react";
import FormField from "./FormField";
import CoolButton from "./CoolButton";
import Navbar from "./Navbar";
import Container from "./Container";

function Signup() {
  return (
    <Fragment>
      <Navbar />
      <Container>
        <FormField label="name" type="text" placeholder="name" />
        <FormField label="email" type="email" placeholder="email" />
        <FormField label="password" type="password" placeholder="password" />

        <CoolButton isSmall isLink isOutlined isMedium>
          Submit
        </CoolButton>
      </Container>
    </Fragment>
  );
}

export default Signup;
