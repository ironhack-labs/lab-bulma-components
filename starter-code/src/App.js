import React from "react";
// import "./App.css";
import "./components/Navbar/Navbar.js"
import Navbar from "./components/Navbar/Navbar.js";
import Formfield from "./components/Formfield/Formfield.js";
import "./components/Formfield/Formfield.css";
import Button from "./components/Button/Button.js";
import "./components/Button/Button.css";
import Signup from "./components/Signup/Signup.js";



class App extends React.Component {
    render() {

        return (
            <div>
                <Navbar/>
                <Formfield/>
                <Button/>
            
            </div>

                
             
        );
    }
}

export default App;