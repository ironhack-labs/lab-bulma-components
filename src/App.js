import React from "react";
import NavBar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolButton/CoolButton";

const App = () => {
  return (
    <div>
      <NavBar />
      <FormField label=" Name " type=" text " placeholder=" eg Alex Smith " />
      <FormField
        label=" Email "
        type=" email "
        placeholder=" por exemplo, alexsmith@gmail.com "
      />
      <CoolButton
        isSmall="is-small "
        isDanger="is-danger"
        className="is-rounded my-class"
      >
        Button 1
      </CoolButton>
      <CoolButton isSmall="is-small " isSuccess="is-success">
        Button 2
      </CoolButton>
    </div>
  );
};

export default App;
