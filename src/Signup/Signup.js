import React from 'react';
import 'bulma/css/bulma.css';
import '../Signup/Signup.css';
import Formfield from '../Formfield/FormField'
import CoolButton from '../CoolButton/CoolButton'


const Signup = props => {
    return (
        <>
            <Formfield label='Name' type='input' placeholder='Name' />
            <Formfield label='Email' type='input' placeholder='Email' />
            <Formfield label='Password' type='password' placeholder='*****' />
            <CoolButton className='button3 is-medium is-light'>Submit</CoolButton>
        </>
    )
}


export default Signup