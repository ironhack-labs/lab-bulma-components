import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField'
import CoolButton from './coolbutton/CoolButton'

const App = () => {
  return (
  <div>
  <Navbar />

    <div className="form">
      <FormField label="Name" type="text" placeholder="e.g Papá Pitufo" />
      <FormField label="Email" type="email" placeholder="e.g. papapitufo@gmail.com" />
      <CoolButton isSuccess className="is-rounded"> Login </CoolButton>
    </div>
  </div>
  )
};

export default App;
