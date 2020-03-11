import React from "react";
import Navbar from "./components/navbar/Navbar";
import FormField from "./components/formfield/FormField";
import CoolButton from "./components/coolButton/CoolButton";

const App = (props) => {
  return (
    <>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <CoolButton isSmall isDanger className="is-rounded my-class">
        Button 1
      </CoolButton>
    </>
  );
};

export default App;
