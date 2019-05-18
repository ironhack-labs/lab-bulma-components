import React, { Component } from 'react';
import Header from "../components/Header";
import FormField from "../components/FormField";
import CoolButton from "../components/CoolButton";

class App extends Component {
  render(){
    return (
      <div>
        <div className="container"> 
          <Header/>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
          <CoolButton isSmall isSuccess>Button 2</CoolButton>
        </div>
      </div>
     );
  }
}

export default App