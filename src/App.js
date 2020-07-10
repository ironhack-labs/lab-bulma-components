import React from 'react'
import Navbar from "./Navbar/Navbar"
import FormField from './formfield/FormField'
import CoolButton from "./CoolButton/CoolButton"
import Signup from "./Signup/Signup"


const App = () => {
  return (
    <div>
     <Navbar/>
     <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
     <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
     <Signup/>  
   
    </div>
  )
};

export default App
