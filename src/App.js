import React from 'react'
import 'bulma/css/bulma.css'
import Navbar from './navbar/Navbar.js'
import FormField from './formfield/FormField.js'

const App = () => {
  return  <section>
            <Navbar/>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
          </section>;
};

export default App;
