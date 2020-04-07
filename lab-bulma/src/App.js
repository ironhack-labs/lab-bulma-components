import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import CoolButton from './coolbutton/CoolButton';
import 'bulma/css/bulma.css';
import './App.css';

function App() {
  return (
    <div className="">
      <header className=""> 
        <Navbar />
        <FormField name="Name" email="Email" />
      </header>
    </div>
  );
}

export default App;
