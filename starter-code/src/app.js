import React, { Component }  from "react";

import Navbar from './navbar.js';
import FormField from './FormField.js';
import CoolButton from './CoolButton.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <FormField field ="name" control = "text" placeholder="John"/>
        <FormField field ="email" control = "email" placeholder="John@gmail.com"/>
        <CoolButton isSmall isSuccess> Submit </CoolButton>
      </div>
    );
  }
}

export default App;