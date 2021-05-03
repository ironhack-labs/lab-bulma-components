import React from 'react';
import Navbar from './Navbar/Navbar';
import FormField from './formfield/FormField'

const App = () => {
  return (
  <div className="mainDiv">

    <div className="navbar-div">
      <Navbar/>
    </div>
    

    <div className="formDiv">
      <FormField nameLabel="Name" type="text" namePldr="e.g Alex Smith"/>
      <FormField emailLabel="Email" type="email" emailPldr="e.g. alexsmith@gmail.com"/>
    </div>

  </div>
    
   );
};

export default App;