import React from 'react';
import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField'
import CoolButton from './coolbutton/CoolButton'

const App = () => {
  return ( 
    <div className="App">
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g. Alex Smith"/>
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton className="button my-class is-danger is-rounded is-small" html="Button 1" />
        <CoolButton className="button is-small is-success" html="Button 2" />
    </div>
  )
  
};

export default App;
