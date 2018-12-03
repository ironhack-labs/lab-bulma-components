import React from "react";
import Navbar from "./components/navbar/NavBar.js";
import FormField from "./components/formfield/FormField.js"
import CoolButton from "./components/coolbutton/CoolButton.js"
import Signup from "./components/signup/Signup.js"

class App extends React.Component {

  render() {

    return (
      <div className="App">
        {/* <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton> */}
        <Signup />

      </div>
    );
  }
}

export default App;