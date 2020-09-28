import React from 'react'
import Navbar from '../navbar/Navbar'
import Formfield from '../formfield/FormField'
import CoolButton from '../coolbutton/CoolButton'


const Signup = () => {

    return (

        <>
            <Navbar />

            <section className="form-top">
                <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
                <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            </section >
            <CoolButton name="button 1" className="button is-rounded is-Small is-danger" />
            <CoolButton name="button 2" className="button is-Small is-success" />
        </>
    )
}


export default Signup