import React, { Component } from "react";
// import "../public/stylesheets/App.css"
import Navbar from "../components/Navbar";
import FormField from "../components/FormField";
import Button from "../components/Button";
import Signup from "../components/Signup";


class App extends Component {
  render() {
    return (
      <main>
        
          <Navbar />
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField
            label="Email"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
          />
          <Button isSmall isDanger className="is-rounded my-class">
            Button 1
          </Button>
          <Button isSmall isSuccess>
            Button 2
          </Button>
          <Signup />
        
      </main>
    );
  }
}

export default App;
