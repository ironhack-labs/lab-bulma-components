import React from 'react';
import Navbar from './Navbar/Navbar';
import FormField from './formfield/FormField'

const App = () => {
  return (
    <div className="mainDiv">
    <div className="navbar-div">
      <Navbar/>
    </div>
    
    <div className="formField-div">
      <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
      </div>
    </div>
    
   );
};

export default App;