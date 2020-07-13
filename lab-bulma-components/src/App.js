import React from 'react';


//css
import 'bulma/css/bulma.css'

//components
import Nav from './components/nav/nav'
import FormField from './components/FormField/FormField';
// import Signup from './components/Signup/signup' -->FUNCIONA :D


function App() {
  return (
    <>
      <Nav />
      <FormField label='name' type='text' placeholder='e.g Alex Smith'/>
      <FormField label='email' type='email' placeholder='e.g. alexsmith@gmail.com'/>
    </>
  )
}

export default App;
