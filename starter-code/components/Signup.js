import React from 'react'
import Navbar from '../components/Navbar'
import FormField from '../components/FormField'
import CoolButton  from '../components/CoolButton'

function Signup(props) {

    return (

    <section className="signup-container">
        <Navbar />
        <FormField />
        <CoolButton />
    </section>

    )
}

export default Signup