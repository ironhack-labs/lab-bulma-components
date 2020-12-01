import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar'
import Signup from './signup/Signup'
import "./App.css"

const App = () => {
  return (
  <div className="App">
<Navbar /> 
<Signup className="signup"/>
  </div>) ;
};

export default App;
