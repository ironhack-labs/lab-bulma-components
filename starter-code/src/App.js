import React from "react";
// import "./App.css";
import "./components/Navbar/Navbar.js"
import Navbar from "./components/Navbar/Navbar.js";

import "./components/FormField/FormField.js"
import FormField from "./components/FormField/FormField.js";
// import "./components/Section/Section.js"

class App extends React.Component {
   render() {

       return (
           <div>
               <Navbar/>
               <FormField />
           </div>



       );
   }
}

export default App;