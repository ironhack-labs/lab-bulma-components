import React from 'react';
import FormField from './formfield/Formfield.js';   //import defualt exports like this 
import MyNavbar from './navbar/Navbar.js';
import CoolButton from './coolbutton/CoolButton.jsx' 
import Signup from './signup/signup'     //keine extension nötig. by default js
import 'bulma/css/bulma.css' 

//create components (Navbar, FormField, CoolbUtton) each in own files, then import here 
//invoke all components in return statement in App


const App = () => {   
  return  (
      <div>
           <MyNavbar/>   
           <FormField placeholder = "e.g Alex Smith" type = "text" label ="Name"> </FormField>    
           <FormField placeholder = "e.g. alexsmith@gmail.com" type = "email" label ="Email"> </FormField> 
           <CoolButton isSmall isDanger className="is-rounded my-class">Login</CoolButton>
            <CoolButton isSmall isSuccess>Signup</CoolButton>  
            
            <Signup />
           
      </div>
  )
};


export default App;  //default export only once in app
