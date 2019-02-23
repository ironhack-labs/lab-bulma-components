import React from "react";
import ReactDOM from "react-dom";

// import Navbar from "./components/Navbar.js";
// import FormField from "./components/FormField.js";
// import CoolButton from "./components/CoolButton.js";
import Signup from "./components/Signup.js";

import "bulma/css/bulma.css";

class App extends React.Component {
  render() {
    return (
      <div>

        <Signup />
        {/* <Navbar />
        <FormField />
        <CoolButton title1="Submit" />   */}
         
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
