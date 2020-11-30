import "bulma/css/bulma.css";

import React from 'react';
import Navbar from './navbar/Navbar.js'
import Formfield from './formfield/Formfield.js'
import CoolButton from './coolButton/CoolButton.js'
import Signup from './signup/Signup.js'

const App = () => {
  return (
<>
  <Navbar />

  <div className=" column is-half is-offset-one-quarter">
  <Formfield label="Name" type="text" placeholder="e.g. Alex Smith" />
  <Formfield label="Email" type="email" placeholder="e.g. alex.smith@gmail.com" />
  </div>
  {/* <CoolButton buttonClass="is-danger is-large" text="To the signup Page" href="signup/Signup" /> */}
  <Signup />
</>
  )
};

export default App;
