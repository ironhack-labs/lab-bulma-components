import React, { Component } from 'react'
import Navbar from '../NavBar/NavBar'
import FormField from '../FormField/FormField'
import CoolButton from '../CoolButton/CoolButton'

class Signup extends Component {
    render(){
        return(
            <>
            <Navbar/>
            <FormField label="Name" type="text" placeholder=""/>
            <FormField label="E-mail" type="text" placeholder=""/>
            <FormField label="Password" type="text" placeholder=""/>
            <CoolButton/>
            </>
        )
    }
}

export default Signup