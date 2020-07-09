import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';


const App = () => {
  return (
    <div>
      <Navbar />
      <div className="formDiv">
        <FormField
          label="Name"
          type="text"
          placeholder="e.g Alex Smith"
        />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g alexsmith@gmail.com"
        />
      </div>
    </div>
  );
};

export default App;
