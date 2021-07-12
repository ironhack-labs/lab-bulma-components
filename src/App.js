import React from 'react';
import NavBar from './navbar/NavBar';
import FormField from './formfield/FormField'
// import CoolButton from './button/CoolButton'

const App = () => {
  return (<div>
      <NavBar />
      <FormField label={'Name'} type={'text'} placeholder={'e.g Alex Smith'} />
      <FormField label={'Email'} type={'email'} placeholder={'e.g. alexsmith@gmail.com'} />
  </div>)
};

// <CoolButton name={'Button 1'}/>
// <CoolButton name={'Button 2}/>
// className={`${button} ${is-rounded} ${my-class} ${is-danger} ${is-small}`}


export default App;