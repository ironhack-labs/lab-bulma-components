import React from 'react'

import Nav from './Nav'
import FormField from './Form'
import Boton from './Boton'

const Signup = () => {


      return (
        <main>  
           <Nav/> 
           <div>
             <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
             <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
           </div>
            <div>
               <Boton className="button is-rounded my-class is-danger is-small">Button 1</Boton>
               <Boton className="button is-small is-success">Button 2</Boton>
           </div>
         </main>
      )
}




export default Signup