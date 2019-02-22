import React from "react"; 
import Navbar from "./Navbar";
import FormField from "./FormField";

class App extends React.Component { 
  render() {

    return ( 
      <div className="App">
        <Navbar></Navbar>
        <FormField></FormField>

      </div>
    );
  }
}

export default App; 