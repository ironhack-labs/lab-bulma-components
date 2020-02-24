import React, {Component} from 'react';
// import './App.css';
import Navbar from "./Navbar.js";

import FormField from "./FormFiled.js";

class App extends Component{

    render () {
        return (

           <div id="main-app">
            <div> Hello</div>
            
            <Navbar />
           
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
           
           </div>
            
        )
    }
}

export default App;