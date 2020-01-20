import React from 'react';
// import 'bulma/css/bulma.css'
import Navbar from './Components/Navbar';
import FormField from './Components/FormFields';

const App = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="John Doe" />
      <FormField label="Email" type="email" placeholder="John Doe" />
    </div>
  );
};

export default App;
