import React from 'react'
import NavBar from '../NavBar/NavBar'
import FormField from '../FormField/FormField'
import CoolBotton from '../CoolButton/CoolButton'

const SignUp = () => {
    return (
        <>
            <NavBar></NavBar>
            <FormField text='Name' type='text' placeholder='Ralucaaaaaaaaa'></FormField>
            <FormField text='Email' type='email' placeholder='raAlucaAH_toShulAa@yahoo.es'></FormField>
            <FormField text='Password' type='password' placeholder='Tu contraseña aquí'></FormField>
            <CoolBotton title='Submit' classes='is-success'></CoolBotton>
        </>
    )
}
export default SignUp
