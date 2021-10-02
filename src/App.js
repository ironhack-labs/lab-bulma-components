import React from 'react';
import Navbar from './components/Navbar/Navbar'
import FormField from './components/Formfield/FormField'
import CoolButton from './components/Button/CoolButton';
const App = () => {
  
  return (<div>

  <Navbar/>

  <FormField/>

  {/* <CoolButton/> */}

  <CoolButton className="button is-danger is-rounded is-small" html="Button 1"/>
  <CoolButton className="button is-small is-success" html="Button 2"/>
  </div>
    
    )

};

export default App;
