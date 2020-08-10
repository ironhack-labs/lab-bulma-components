import React from 'react';
import Navbar from './components/Navbar';
import 'bulma/css/bulma.css';
import FormField from './formfield/FormField';
import CoolButton from './components/CoolButton'
import SignUp from './components/signup';



function App(){
  return(
   <div className="App">
   <Navbar />
   <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
   <FormField label="E-mail" type="email" placeholder="e.g alexismith@gmail.com"/>
   <CoolButton label="Button1" className="button is-rounded my-class is-danger is-small">Button 1</CoolButton>
   <CoolButton label="Button2" className="button is-small is-success">Button 1</CoolButton>
   <SignUp/>
   </div>
  );
}



export default App;


