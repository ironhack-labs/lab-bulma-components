import React from 'react'
import Navbar from '../components/Navbar'
import FormField from '../components/FormField'
import CoolButton from '../components/CoolButton'


function Signup(props) {
    
     return (
            
        <main className="App">
        <Navbar />
        <section className="">
        
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

        </section>
        <section className="">
        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
        <CoolButton isSmall isSuccess>Button 2</CoolButton>
        </section>
        </main>
        
        
    )   
    
   


}

export default Signup