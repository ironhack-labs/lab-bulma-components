import React from 'react'
import 'bulma/css/bulma.css'
import Navbar from '../navbar/Navbar.js'


const Signup = () => {
    return (
           <Navbar/>
           <section className="form">
    
    <Formfield label="name" type="text" placeholder="e.g Alex Smith"/>
    <Formfield label="Email" type="email" placeholder="e.g alexsmith@gmail.com"/>
    <Formfield label="Password" type="Password" placeholder="**********"/>
    <Coolbuton type="Submit">Submit</Coolbuton>
    </section>
               
    )
    }

 export default Signup; 