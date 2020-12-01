import React from "react";
import CoolButton from "./coolbutton/CoolButton";
import FormField from "./formfield/FormField";
import Navbar from "./navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <form>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />

        <CoolButton isSmall isDanger className="is-rounded my-class">
          Button 1
        </CoolButton>
        <CoolButton isSmall isSuccess>
          Button 2
        </CoolButton>
      </form>
    </div>
  );
};

export default App;
