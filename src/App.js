import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from "./navbar/Navbar.js";
import Formfield from "./formfield/Formfield.js";
import CoolButton from "./coolbutton/CoolButton.js";
import SignUp from "./signup/SignUp.js";

const App = () => {
  return <div className="App">

    {/* <Navbar />



    <hr />
    <Formfield label="Name" type="text" placeholder="e.g. Smith" />
    <Formfield label="Email" type="email" placeholder="smith@gmail.com" /> */}


    <SignUp />

  </div>
};

export default App;
