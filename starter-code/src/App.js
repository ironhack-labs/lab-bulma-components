import React, { Component } from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import ButtonField from "./ButtonField";
import Signup from "./Signup";
import Comment from "./Comment"
import "./App.css";


const App = () => {
    return (
     <div className="App">
     <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
 <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
 <ButtonField isSmall isDanger className="is-rounded my-class">Button 1</ButtonField>   
 <Signup />
 <Comment />
      </div>
    );
  }

export default App;