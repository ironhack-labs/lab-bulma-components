import React, { Fragment } from "react";
import CoolButton from "./button/CoolButton"
import Signup from "./signup/signup"
import Message from "./message/message";

const App = () => {
  return (
    <Fragment>
      <Signup />
      <CoolButton 
        isDanger={true}
      />
      <CoolButton />
      <Message />
    </Fragment>
  );
};

export default App;
