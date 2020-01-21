import React from 'react';
import Navbar from './Components/Navbar';
import FormField from './Components/FormFields';
import CoolButton from './Components/CoolButton';

const App = () => {
  return (
    <div className="form">
      <Navbar />
      <FormField label="Name" type="text" placeholder="John Doe" />
      <FormField label="Email" type="email" placeholder="John Doe" />
      <FormField label="password" type="password" placeholder="" />

    </div>
  );
};

export default App;
