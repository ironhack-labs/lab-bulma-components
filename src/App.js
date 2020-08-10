import React, { Fragment } from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./navbar/Navbar";
import CoolButton from "./button/CoolButton"
import Signup from "./signup/signup"
const App = () => {
  return (
    <Fragment>
      <Signup />
      <CoolButton 
        isDanger={true}
      />
      <CoolButton />
    </Fragment>
  );
};

export default App;
