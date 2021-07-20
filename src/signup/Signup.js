import Button from '../button/Button.js'
import FormField from '../formfield/FormField.js'
import Navbar from '../navbar/Navbar.js'
import React, {Component} from 'react'
import 'bulma/css/bulma.css'
import CoolButton from '../button/Button.js'
import './Signup.css'

class Signup extends Component{
    render(){
        return(
            <React.Fragment>
            <Navbar/>
            <div className= 'form-field'> 
            <FormField  className= 'first-form'  label = 'Name' type = 'text' placeholder = 'ex. Mario Bros'/>
            <FormField  label = 'Email' type = 'text'  placeholder = 'example@example.com'/>
            <FormField  label= 'Password' type= 'password' placeholder= '******'/>
            <div  className = 'is-centered columns button-form'>

            <CoolButton isSuccess  input ='Send'/>
            </div>
            </div>
            </React.Fragment>
        )
    }
}


export default Signup;