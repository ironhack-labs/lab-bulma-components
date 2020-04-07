import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar.js'
import FormField from './formfield/FormField.js'
import Button from './coolbutton/CoolButton.js'

const App = () => {
    return (
      <div className="App">
        <Navbar />
        <FormField label="Name" type="text" placeholder="Thibault Delfaud" />
        <FormField label="Email" type="email" placeholder="thibault.delfaud@gmail.com" /> 
        <Button />
      </div>
    );
    }

export default App;
