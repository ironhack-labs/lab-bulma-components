import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./components/Navbar.js";
import FormField from "./components/FormField.js";
import CoolButton from "./components/CoolButton.js";
//import Signup from "./components/Signup.js";

import "bulma/css/bulma.css";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Signup /> */}

        <Navbar />

        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
        
        {/* <CoolButton title1="Submit" /> */}
        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
        <CoolButton isSmall isSuccess>Button 2</CoolButton>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
