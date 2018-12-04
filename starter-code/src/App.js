import React from "react";
// import "./App.css";
import "./components/Navbar/Navbar.js"
import Navbar from "./components/Navbar/Navbar.js";

import "./components/FormField/FormField.js"
import FormField from "./components/FormField/FormField.js";

import "./components/CoolButton/CoolButton.js"
import CoolButton from "./components/CoolButton/CoolButton.js";

import "./components/Signup/Signup.js"
import Signup from "./components/Signup/Signup.js";
// import "./components/Section/Section.js"

class App extends React.Component {
   render() {

       return (
           <div>
               <Navbar/>
               <FormField />
               <CoolButton />
               <Signup />

           </div>



       );
   }
}

export default App;