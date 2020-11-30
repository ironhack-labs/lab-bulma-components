import React from 'react';
import 'bulma/css/bulma.css';
// import Navbar from './navbar/Navbar'
// import FormField from './formfield/FormField'
import Signup from './signup/Signup';


const App = () => {
  return (
    <div className="App">
      {/* <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> */}
      <Signup/>
    </div>
  )
};

export default App;
