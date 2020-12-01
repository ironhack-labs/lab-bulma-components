import React from "react";
import Formfield from "./formfield/Formfield";
import Navbar from "./Navbar/Navbar";
import 'bulma/css/bulma.css';
import CoolButton from "./CoolButton/CoolButton";

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

<CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
<CoolButton isSmall isSuccess>Button 2</CoolButton>

  </div>
  )
};

export default App;
