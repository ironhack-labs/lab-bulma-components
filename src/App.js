import React from 'react';
import Navbar from './components/navbar/navbar'
import FormField from './components/formfield/formfield'
import CoolButton from './components/buttons/coolbuttons'
import Login from './components/login/login'


function App() {
  return (
    <section>
 <div>
   <Navbar/>
   <FormField  label = " Name "  type = " text "  placeholder = " eg Alex Smith "/>
   <FormField  label = " Email "  type = " email "  placeholder = " eg alexsmith@gmail.com " /> 
  </div>
      
   <CoolButton className="button is-rounded my-class is-small is-danger" name = "Button 1" href= "#"/>
   <CoolButton className='button is-small is-success' name = "Button 2" href= "#"/>
      <div>
        <Login/>
      </div>
    </section>
  )
}

export default App
