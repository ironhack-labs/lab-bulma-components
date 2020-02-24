import React from "react";
import Navbar from "./Navbar";
import FormField from "./FormField"
import CoolButton from "./CoolButton"

function Signup(props) {
        return(
            <div>
            <Navbar></Navbar>
            < FormField  label = " Name "  type = " text "  placeholder = " eg Alex Smith " />
            < FormField  label = " Email "  type = " email "  placeholder = " eg alexsmith@gmail.com " />
            < FormField  label = " Password "  type = " password "  placeholder = "Password" />
            < CoolButton  isSmall  isSuccess  className = "button is-success my-class " > Botón 2 </ CoolButton >
           </div>


);

}

export default Signup;