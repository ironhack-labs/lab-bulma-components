import React, {Component} from 'react'
import Navbar from '../navbar/Navbar.js'
import FormField from '../formfield/FormField.js'
import CoolButton from '../coolButton/CoolButton.js'
import 'bulma/css/bulma.css'

const Signup = () => {

    return(

        <div className='signup'>
            <Navbar></Navbar>
            <form>
            <FormField label='Insert your Name' type='text' placeholder='Insert your name'></FormField>
            <FormField label='Insert your email' type='email' placeholder='Insert your email'></FormField>
            <FormField label='Insert your password' type='password'></FormField>
            <CoolButton className='is-success' type='submit' title='Sign Up'></CoolButton>
            </form>

        </div>
    ) 

    
}

export default Signup