import React from 'react';
import 'bulma/css/bulma.css'
import Navbar from './navbar/Navbar.js'; 
import FormField from './formfield/FormField.js';
import CoolButton from './button/Button.js';
import Signup from './Signup/Signup.js';



const App = () => {
  return (<div>
    {/* <Navbar/>
    <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
    <FormField label='Password' type='Password' placeholder="Pass here"/>
    <CoolButton class={'button is-rounded my-class is-danger is-small'} input={'test1'}/>
    <CoolButton class={'button is-primary is-success'} input={'Test2'}/> */}
    <Signup/>
    
    </div>)
};

export default App;


{/* <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
<CoolButton isSmall isSuccess>Button 2</CoolButton> */}