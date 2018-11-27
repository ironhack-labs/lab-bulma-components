import React, {Component} from "react"
import Navbar from "./Navbar.js"
import FormField from "./FormField.js"
import CoolButton from "./CoolButton.js"

class Signup extends Component {
    render(){
        return(
                <form>
                    <FormField name = "name"/>
                    <FormField name = "email" />
                    <FormField name = "password"/>
                    <CoolButton name = "sign up" isSmall isDanger className="is-rounded my-class"/>
                </form>
        )
    }

}

export default Signup