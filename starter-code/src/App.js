import React from "react";
import Nav from  "./Nav";
import FormField from "./FormField";

class App extends React.Component{
  render() {
    return (<React.Fragment> 
            <Nav />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            </React.Fragment>);
  }
}

export default App;