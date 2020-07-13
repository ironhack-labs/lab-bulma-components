import React from 'react';
import NavBar from './navbar/navbar'
import FormField from './formfield/formfield'
import CoolButton from './button/button'
import Signup from './Signup/signup'


const App = () => {
  return (

      <main>
      
        <NavBar/>
        <FormField label = "Name" type = "text" placeholder = "e.g Alex Smith"/>
        <FormField label = "Email" type = "email" placeholder = "e.g alexsmith@gmail.com"/>
        
        
        {/* <Signup/> */}
      </main>

  )
  
}

export default App;
