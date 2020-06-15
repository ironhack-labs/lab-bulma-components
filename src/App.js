import React from 'react';
import 'bulma/css/bulma.css';

import Navbar from "./navbar/Navbar"
import Formfield from "./formfield/Formfield"
import CoolButton from "./coolbutton/CoolButton"
import SignUp from "./signup/SignUp"

function App() {
  return <div>
    <Navbar />
    <Formfield label="name" type="text" placeholder="e.g Alex Smith" />
    <Formfield label="email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <CoolButton isSmall isDanger className="is-rounded my-class">Log In</CoolButton>
    <CoolButton isSmall isSuccess>Sign Up</CoolButton>
    <SignUp/>

  </div>
};

export default App;
