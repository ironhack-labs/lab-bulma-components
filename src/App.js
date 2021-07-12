import React from 'react';
import NavBar from './navbar/NavBar';
import FormField from './formfield/FormField'
import CoolButton from './button/CoolButton'

const App = () => {
  return (<div>
      <NavBar />
      <FormField label={'Name'} type={'text'} placeholder={'e.g Alex Smith'} />
      <FormField label={'Email'} type={'email'} placeholder={'e.g. alexsmith@gmail.com'} />
      <CoolButton input={'Button 1'} class={'button is-primary is-danger is-rounded'}/>
      <CoolButton input={'Button 2'} class={'button is-primary is-success'}/>
  </div>)
};

export default App;