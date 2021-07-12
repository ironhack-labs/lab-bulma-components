import React from 'react';
import NavBar from './navbar/Navbar'
import FormField from './formfield/FormField'
import 'bulma/css/bulma.css';
import CoolButton from './coolbutton/CoolButton';

const App = () => {
  return (<div>
    <NavBar />
    <FormField label={'Name'}
                type={'text'}
                placeholder={'e.g. Mother Of Dragons'}
    />
    <FormField label={'Email'}
                type={'email'}
                placeholder={'e.g. teamtargaryen@ironhack.com'}
    />
    </div>
  )}


export default App;
