import React, { Component } from "react";
import 'bulma/css/bulma.css';
import NavBar from './components/NavBar'
import FormField from './components/FormField'
import CoolButton from './components/CoolButton'
import Signup from "./components/Signup";


class App extends Component {
  render() {
      return(
        <main>
          <NavBar/>
          <br />
          <br />
          <br />

          <FormField/>
          <CoolButton/>
          <br/>
          <br />
          <br />

          <Signup/>
        </main>
    );
  }
}

export default App;