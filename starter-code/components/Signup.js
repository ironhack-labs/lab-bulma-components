import React from "react"
import Navbar from '../components/Navbar'

import FormField from "../components/FormField"

import CoolButton from "../components/CoolButton"

function Signup(props){
    return(
        <div>
          <Navbar/>
            
        <form>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
           < FormField label="Email" type="password" placeholder="***********" />
           < FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          
            <CoolButton>Submit</CoolButton>
            </form>
        </div>
    )
}
export default Signup