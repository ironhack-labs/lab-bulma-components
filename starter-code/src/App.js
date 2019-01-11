import React, { Component } from "react";
import Signup from "./Signup"
import Message from "./Message"
import { classes } from "./props";

class App extends Component {
    render() {
      return (
       <div>
          <Signup/>
          <Message title="Hola" mclas={classes.isPrimary} message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
       </div>
      );
    }
  }
  

 
  export default App;
  