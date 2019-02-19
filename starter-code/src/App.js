import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import Nav from "./Nav.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";

class App extends Component {
  render() {
    // render() returns the html of this component's content
    // (use parenthesis when returning multiple lines of html)
    return (
      // use "className" instead of "class" for styling
      <div>
        <div className="App container">
          <Nav />
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField
            label="Email"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
          />
        </div>
        <div className="App Container">
          <CoolButton />
        </div>
      </div>
    );
  }
}

// export your component CLASS so that you can display in other files
// (this is like "module.exports" in Node.js)
export default App;
