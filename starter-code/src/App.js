import React, { Component } from "react";
import "./App.css";
import Navbar from './components/Navbar'
import FormField from './components/FormField'
import CoolButton from './components/CoolButton'
import Signup from './components/Signup'
import'bulma/css/bulma.css'

class App extends Component {

    render() {
      return (
        <div className="App">
            <Navbar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
            <CoolButton isSmall isDanger isRounded value="Button"/>
            <CoolButton isSmall isSuccess value="Button" className="my-class"/>          
        </div>
      );
    }
}


export default App;