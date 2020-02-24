import React from 'react'
import './Signup.css'
import FormField from '../formField/FormField'
import CoolButton from '../coolButton/CoolButton'
import Container from '../container/Container'

const Signup = () => {

    return (

        <main>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="" />

            <CoolButton isMedium isSuccess value='Submit' />

            <Container />

        </main>
    )
}

export default Signup
