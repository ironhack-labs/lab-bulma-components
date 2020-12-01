import React from "react";
import Formfield from "./formfield/Formfield";
import Navbar from "./Navbar/Navbar";
import 'bulma/css/bulma.css';

const App = () => {
  return (
  <div className="App">
  <Navbar />
  <Formfield 
  label="Name" 
  type="text" 
  placeholder="e.g Alex Smith" />
<Formfield 
label="Email" 
type="email" 
placeholder="e.g. alexsmith@gmail.com" />
  </div>
  )
};

export default App;
