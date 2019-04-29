import React from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";
import Message from "./Message";

class App extends React.Component {
  render() {
    return (
      <div id="app-container">
      <Navbar />
      <FormField label="Name" inputType="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" inputType="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" inputType="password" placeholder="" />
      <CoolButton label="Submit" listOfClasses="button isRounded isSuccess"/>
      <Message isInfo title="Hello World" />
    </div>
    );
  }
}

export default App;