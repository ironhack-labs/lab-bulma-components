import React, { Component } from 'react'
import CoolButton from './../buttons/coolbuttons'
import FormField from './../formfield/formfield'
import Navbar from './../navbar/navbar'
import './login.css'

class Login extends Component {

    render(){

        return (
            <div>
                <Navbar/>
                <FormField  label = " Name "  type = " text "  placeholder = " eg Alex Smith "/>
                <FormField label=" Email " type=" email " placeholder=" eg alexsmith@gmail.com " />
                <CoolButton className="button is-rounded my-class is-small is-danger" name = "SIGNUP" href= "#"/>
            </div>      
        )
          
    }



                
}






export default Login