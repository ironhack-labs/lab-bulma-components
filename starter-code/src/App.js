import React from "react";
import Navbar from "./components/Navbar";
import FormField from "./components/Form";
import CoolButton from "./components/CoolButton";

const App = () => {
  return (
    <div>
      <Navbar />
      <form>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
        <FormField label="Password" type="password" placeholder="····"/>
        <CoolButton isPrimary className="is-rounded my-class">Signup</CoolButton>
      </form>
    </div>
  );
};

export default App;
