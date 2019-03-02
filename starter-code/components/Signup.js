import React, { Component } from 'react'
import Coolbutton from './Coolbutton'
import Formfield from './Formfield'

class Signup extends Component {
    render(){
        return (
            <div className = "signup">
                <Formfield title="Name" type="text"/>
                <Formfield title="Email" type="email"/>
                <Formfield title="password" type="password"/>
                <Coolbutton type ="submit" text = "send"/>
            </div>
        )
    }
}

export default Signup