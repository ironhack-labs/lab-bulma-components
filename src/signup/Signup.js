import React from 'react'

import Navbar from '../navbar/Navbar'

import Formfield from '../formfield/Formfield'

import CoolButton from '../coolButton/CoolButton'


const Signup = props => {

    return (

        <>
            
            <Navbar />
            
            <section className="form">

                <Formfield label="Name" type="text" placeholder="e.g Alex Smith"/>
        
                <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                
                <Formfield label="Password" type="password" placeholder="*********" />
                
                <CoolButton className="isSmall isSuccess">Submit</CoolButton> 

            </section>

        </>
    )

}



export default Signup