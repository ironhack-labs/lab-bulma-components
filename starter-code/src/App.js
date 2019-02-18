import React, {Component} from "react";
import "./App.css";
import NavBar from "./Navbar"
import FormField from "./Formfield"
import CoolButton from "./Coolbutton"
import SignUp from "./Signup";
import Message from "./Message";

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <SignUp />
      <Message title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        <strong>Que te peines!!!!</strong>.
      </Message>  
      
      </div>
    );
  }
}

export default App;