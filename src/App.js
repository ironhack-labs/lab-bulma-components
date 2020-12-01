import React from 'react';
import Navbar from "./navbar/Navbar"
import FormField from "./formfield/FormField"
import CoolButton from "./coolButton/CoolButton"
import 'bulma/css/bulma.css';

const App = () => {
  return(
  <div className="App">
<Navbar />
<FormField label="Name" type="text" placeholder="e.g Alex Smith" />
<FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
<CoolButton isSmall isDanger className="is-rounded my-class" />
<CoolButton isSmall isSuccess />
</div>

  ) 
};

export default App;
