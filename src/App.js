import React from 'react';
import Navbar from './navbar/Navbar';
import Formfield from './formfield/FormField';
import 'bulma/css/bulma.css';
import SignUp from './signup/SignUp';

const App = () => {
  return(
    <div>
      <Navbar LogIn='Log In' SignUp='SignUp'/>
      <Formfield label="Name" type="text" placeholder="John Doe"/>
      <Formfield label="Email" type="email" placeholder="Johndoe@gmail.com"/>
      <SignUp/>

    </div>
  )
}

export default App;
