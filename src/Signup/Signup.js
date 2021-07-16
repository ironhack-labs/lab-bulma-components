import React from "react";
import Navbar from "../Navbar/Navbar";
import Formfield from "../Formfield/Formfield";
import CoolButton from '../CoolButton/CoolButton'
import 'bulma/css/bulma.css'
class Signup extends React.Component {
    render(){
        <div>
            <Formfield className = 'name-form' label = 'Name' type = 'text' placeholder = 'Ex: Alex souza'/>
            <Formfield className = 'email-form' label = 'Email' type = 'email' placeholder = 'Ex: example@gmail.com'/>
            <Formfield className = 'email-form' label = 'Password' type = 'password' placeholder = 'your password'/>
            <CoolButton text = 'Signup' className= 'button is-small is-success'/>
        </div>
    }
}

export default Signup